import React, { Component } from 'react';
import '../../app/static/css/common.css';
import analytics from 'helpers/analytics.js'
const textStyle = {
  fontSize: 18, 
  paddingBottom:0, 
  textAlign: 'left', 
  justifyContent: 'center',
  textAlignVertical: "center" ,
  alignItems: "center" 
};


class Action extends Component {
  onActionClick(link,label) {
      analytics.sendEvent('Action-'+label+'-Clicked');
      window.openLinkNewTab(link);
  }
  componentDidMount(){
      analytics.sendEvent('ActionPageAppeared');
      window.setLastShownTimeActions();
  }
  render() {
    return (
      <div className = "action-section">
        <div className = "actions">
          {this.props.actionList.map((action, i) => (
            <div onClick={() => this.onActionClick(action.link,action.label)} key={i}>
              <div style={{display: 'flex'}}>
                <img src={action.imageUrl} style={{width:'70px', padding:'10px', height:'70px',justifyContent: 'center', textAlignVertical: "center", alignItems: "center"  }}/>
                <text className='fontStyle' style={textStyle}>{action.label}</text>
              </div>
              <p>{action.description}</p>
            </div>
          ))}
        </div>
        <div className="wp-block-buttons">
          <div className="wp-block-button is-style-primary">
              <a className="wp-block-button__link" href="https://progressiveshopper.com/actions/">Learn More</a>
          </div>
			  </div>
    </div>
      
    );
  }
}
export default Action;
