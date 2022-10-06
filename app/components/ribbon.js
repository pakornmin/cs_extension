import React, { Component } from 'react';
import 'static/css/common.css';
import analytics from 'helpers/analytics.js'
class Ribbon extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      analytics.sendEvent('Ribbon Appeared');
  }
  
  onRibbonButtonClick  = ()=>{
    analytics.sendEvent('Ribbon Clicked');
    //console.log('Ribbon clicked');
    window.openIframePopup();
  }

  render() {
     console.log(this.props);
     const shopStatus = this.props.shopStatus;
     let iconPath = '';
     if(shopStatus === 'NO'){
      iconPath = "static/images/bad.svg";
     }
     else if(shopStatus === 'OK'){
      iconPath = "static/images/ok.svg";
     }
     else if(shopStatus === 'YES') {
      iconPath = "static/images/good.svg";
     }
    
    return (
       <div className="bookmark" onClick={this.onRibbonButtonClick}>
         { 
          <span className="bookmark-icon progressiveshopper-icon progressiveshopper-icon--large">
            <img src={iconPath} /> 
          </span>
         }         
      </div>
    );
  }
}

export default Ribbon;
