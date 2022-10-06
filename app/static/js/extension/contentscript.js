const ContentScript = {
	iframeId: "climateshopper_iframe",
	init: function(autoLoad, forceLoad){
		chrome.runtime.sendMessage( 
			{"command":"LOAD_CLIMATE_DATA", 
				host: window.location.host,
				autoLoad: autoLoad,
				forceLoad: forceLoad
			}, 
			function(response){
				if(response){
					if(response.popup){
						ContentScript.openIframePopup();
						//console.log(response);
					}
					else if(response.ribbon){
						//console.log(JSON.stringify(response.data));
						ContentScript.openIframeRibbon(response.data);
						//console.log(response);
					}
				}
				//console.log(response);	
			});
	},
	openIframePopup(){
		ContentScript.removeIframe();
		ContentScript.insertIframe('popup');

	},
	openIframeRibbon(data){
		ContentScript.removeIframe();
		ContentScript.insertIframe('ribbon',data);

	},
	removeIframe: function(){
		 var frame = document.getElementById("climateshopper_iframe");
		 if(frame){
			 frame.parentNode.removeChild(frame);
		 }
	},
	insertIframe: function(type, data){
		var iFrame  = document.createElement ("iframe");
    	iFrame.id = 'climateshopper_iframe';
		if(type !== "carousel") {
			iFrame.src  = chrome.runtime.getURL("../../index.html?type="+type);
			//console.log('wierd');
			iFrame.style.cssText = (type === 'popup'? ContentScript.getPopupIframeStyle() : ContentScript.getRibbonIframeStyle(data)) ;
			document.body.insertBefore (iFrame, document.body.firstChild);
		}
	},
	getPopupIframeStyle: function(){
		return 'position:fixed;top:0;right:0px;display:block;width:390px;height:614px;z-index:99999999 !important;border-width: 1px !important;';
	},
	getRibbonIframeStyle: function(data){
		var hw = 'width:30px;height:30px;';
		return 'position:fixed;float:right;top:0;right:20px;border: 0;'+hw+'z-index:99999999 !important';
	}
}

ContentScript.init(true,false);


chrome.runtime.onMessage.addListener(function(request, sender, callback) {
	  switch(request.command){
		  	case "INVOKE_INIT" : {
				ContentScript.init(request.autoLoad, request.forceLoad);
				return true;
			}
			case "OPEN_IFRAME_POPUP" : {
				ContentScript.openIframePopup();
				return true;
			}
			case "CLOSE_IFRAME" : {
				ContentScript.removeIframe();
				ContentScript.openIframeRibbon(request.data);
				return true;
			}
	  }
});