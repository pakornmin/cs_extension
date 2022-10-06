import React, { Component } from 'react';
import 'static/css/common.css';
import analytics from 'helpers/analytics.js'
class Settings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        notifyActionsCheckbox: props.settingsCheckboxValues.notifyActionsCheckbox
    };
  }
  handleChangeChkbox = ({target})=>{
    const state = this.state;
    state[target.id] = target.checked;
    this.setState(state);
    window.setSettingsCheckboxValue(target.id, target.checked);
    if(target.checked){
          analytics.sendEvent( target.id+ 'Checked')
    } else {
          analytics.sendEvent(target.id+ 'Unchecked');
    }
  }
  componentDidMount() {
      analytics.sendEvent('SettingsPageAppeared');
  }
  render() {
    return (
            <section id="settings">
                
                <div className="setting">
                  <div className="setting-description">
                    <p><label >Notify me when there are actions I can take to support Progressive Causes</label></p>
                  </div>
                  <div className="setting-toggler">
                    <input type="checkbox" id="notifyActionsCheckbox" className="toggle-switch" defaultChecked={this.state.notifyActionsCheckbox} onChange={this.handleChangeChkbox}/>
                  </div>
                </div>

                
          </section>  
    );
  }
}
export default Settings;
