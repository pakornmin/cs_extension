import React, { Component } from 'react';
import 'static/css/common.css';
import analytics from 'helpers/analytics.js'

class Header extends Component {
  constructor(props) {
        super(props);
  }
  onSettingsClick = ()=>{
    analytics.sendEvent('SettingButtonClicked');
    this.props.showSetting();
  }

  onCloseButtonClick  = ()=>{
      analytics.sendEvent('PopupCloseClicked');
      //console.log('Close clicked');
      window.closeIframeWindow(this.props);
  }
  /*
  style={{
    fontSize: '1.65rem',
    fontFamily: 'Roboto Condensed,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif',
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: '0.025em',
    line-height: '1.2',
    text-transform: 'uppercase'
    }}
    */

  render() {
    return (
      <div>
          <header>
            <div className="logo" style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignContent: 'center', 
                  justifyContent: 'center',
                  fontFamily: 'Roboto Condensed,-apple-system,blinkmacsystemfont,Segoe UI,roboto,oxygen-sans,ubuntu,cantarell,Helvetica Neue,sans-serif',
                      fontSize: '1.65rem',
                      fontStyle: 'italic',
                      fontWeight: '600',
                      letterSpacing: '0.025em',
                      lineHeight: '1.2',
                      textTransform: 'uppercase'
                  }}>
              <img 
                style={{ width: 50, height: 50 }}
                src="static/images/logo.png" alt="" className=''/> 
                Climate Shopper
            </div>
            <div className="close" onClick={this.onCloseButtonClick}>
              <img src="static/images/close.png" alt="Close"  title="Close"/>
            </div> 
          </header>
    </div>  
    );
  }
}
export default Header;
