(function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;i[r]=i[r] || function(){
        (i[r].q=i[r].q||[]).push(arguments)
    }, 
    i[r].l=1*new Date();
    a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
})(window,document,'script','ga.js','ga'); 

ga('create', 'UA-115390690-3', 'auto');

ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200

ga('require', 'displayfeatures');

ga('set', 'page', '/index.html');

ga('send', 'pageview', '/index.html');

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

chrome.runtime.sendMessage( {"command":'GET_DATA'}, function(data){
    const type = getParameterByName('type');
    if(type !== 'popup' && type !== 'ribbon'){
        console.log('type = nothing?');
    }
    console.log('type = ', type);
    entryFunction(data, getParameterByName('type'));
} );

window.openLinkInNewTabAndClose = function (url){
    chrome.tabs.create({active:false , url : url}, function(tab){       
        setTimeout(function(){
            chrome.tabs.remove(tab.id);
        }, 5000);
    });
}
window.openLinkNewTab = function (url){
    // chrome.tabs.create({active:true , url : url});
    chrome.runtime.sendMessage( {"command":"OPEN_LINK_NEW_TAB","url":url});
}
window.openIframePopup = function (url){
    chrome.runtime.sendMessage( {"command":"OPEN_IFRAME_POPUP"});
}

window.closeIframeWindow = function (props){
   chrome.runtime.sendMessage( {"command":"CLOSE_IFRAME", data: props});
}
window.setSettingsCheckboxValue = function (checkboxName, value){
   chrome.runtime.sendMessage( {"command":"SET_SETTINGS_CHECKBOX_VALUE", "checkboxName":checkboxName,"value":value});
}
window.fillCouponBoxWitCode = function (code){
   chrome.runtime.sendMessage( {"command":"FILL_COUPONBOX_WITH_CODE", "couponCode":code});
}
window.setLastShownTimeActions = function (){
     chrome.runtime.sendMessage( {"command":"SET_ACTION_LAST_SHOWN_TIME"});
}
window.copyTextToClipBoard = function(text){
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value=text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}


//entryFunction(data);