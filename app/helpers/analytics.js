const sendEvent = (action)=>{
      var eventCategory = Config.analyticsName;
      ga('send', 'event', eventCategory, action);
}
const Analytics = {
  sendEvent
}
export default Analytics;