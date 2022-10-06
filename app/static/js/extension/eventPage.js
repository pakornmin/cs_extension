importScripts('../../config.js');


const Background = {
	tabWiseData: {},
	redirects: {},

//do time validation here for all ribbons, make time related code common, pass indication to load data
	loadClimateData: async function (request, sender, sendResponse){
		var redirectArray = Background.redirects[sender.tab.id];
		Background.redirects[sender.tab.id] = [];
		var manifestData = chrome.runtime.getManifest();
		//var postData = {};
		//console.log(request);
		const webDomain = encodeURIComponent(request.host);

		const httpUrl = Config[Config.env].endpoints.companyData + webDomain; 

		const response = await fetch(httpUrl);

		const jsonResponse = await response.json();
		jsonResponse.iconPath = `https://ps-logos.s3.us-east-2.amazonaws.com/` + jsonResponse.iconPath;
		console.log(jsonResponse);
		await Background.handleClimateDataResponse(jsonResponse, request, sender, sendResponse);
	},
	
	handleClimateDataResponse: function(serverData, request, sender, sendResponse){
		if(serverData){
			const totalContribution = serverData.total;
			const shopStatus = serverData.shopStatus;
			let iconPath = '';
			if(shopStatus === 'NO'){
				iconPath = "../images/bookmark-red.png";
			}
			else if(shopStatus === 'OK'){
				iconPath = "../images/bookmark-purple.png";
			}
			else if(shopStatus === 'YES') {
				iconPath = "../images/bookmark-blue.png";
			}
			chrome.action.setIcon({
				tabId: sender.tab.id,
				path : {
					'16': iconPath,
					'24': iconPath,
					'32': iconPath
				}
			});
			const tab_id = sender.tab.id;
			//console.log("tab Id: ", tab_id);
			Background.tabWiseData[tab_id] = Background.tabWiseData[tab_id] || {};
			Background.tabWiseData[tab_id].data = serverData;
			//chrome.action.show(sender.tab.id);
			sendResponse({'popup': request.forceLoad, 'ribbon':!request.forceLoad, 'data': serverData});
			return true;
		}
		else {
			//chrome.action.hide(sender.tab.id);
		}
	},


	messageListener: function(request, sender, sendResponse){
		switch(request.command){
			case "LOAD_CLIMATE_DATA" : {
				Background.loadClimateData(request, sender, sendResponse);
				return true;
			}
			case "GET_DATA" : {
				try {
					if(Background.tabWiseData[sender.tab.id] && Background.tabWiseData[sender.tab.id].data){
						sendResponse(Background.tabWiseData[sender.tab.id].data);
						return true;
					}
				}
				catch(err) {
					return false;
				}
				//return false;
				
			}
			case "CLOSE_IFRAME" : {
				chrome.tabs.sendMessage(sender.tab.id, {"command":"CLOSE_IFRAME"});
				return true;
			}
			case "OPEN_IFRAME_POPUP" : {
				chrome.tabs.sendMessage(sender.tab.id, {"command":"OPEN_IFRAME_POPUP"});
				return true;
			}
			case "RESIZE_HEIGHT_IFRAME" : {
				chrome.tabs.sendMessage(sender.tab.id, request);
				return true;
			}
			case "OPEN_LINK_NEW_TAB" : {
				chrome.tabs.create({active:true , url : request.url});
				return true;
			}
		}
		return true;
	}
}


chrome.runtime.onMessage.addListener(Background.messageListener);
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        //let url = chrome.runtime.getURL ("index.html?type=carousel");
	    //chrome.tabs.create({active:true , url : url});
    }else if(details.reason == "update"){
      
	}
});
//chrome.runtime.setUninstallURL('https://progressiveshopper.com/uninstall/');
chrome.action.onClicked.addListener(function(tab) { 
	chrome.tabs.sendMessage(tab.id, {"command":"INVOKE_INIT", autoLoad: false, forceLoad: true});
});
