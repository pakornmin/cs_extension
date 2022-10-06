import React, { Component,Fragment } from 'react';
import Home from 'components/home';
import Action from './action';
import SimilarStore from './similar-stores';
import Header from 'components/header';
import Settings from 'components/settings';
import Footer from './footer';
import 'static/css/common.css';
import Issues from './issues';
class Popup extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      home: true, 
      action:false, 
      similarStores: false, 
      setting: false,
    };
  }
  showHome = ()=>{
    this.setState({
      home: true, 
      action:false, 
      similarStores: false, 
      setting: false, 
      coupan: false, 
      issues: false });
  }
  showAction = ()=>{
    this.setState({
      home: false, 
      action:true, 
      similarStores: false, 
      setting: false, 
      coupan: false, 
      issues: false });
  }
  showSimilarStores = ()=>{
    this.setState({
      home: false, 
      action:false, 
      similarStores: true, 
      setting: false, 
      coupan: false, 
      issues: false });
  }
  showSetting = ()=>{
    this.setState({
      home: false, 
      action:false, 
      similarStores: false, 
      setting: true, 
      coupan: false, 
      issues: false });
  }
  
  render() {
    let data = this.props.data;
    //console.log('climateData =', data);
    return (
      <Fragment>
          <Header showSetting={this.showSetting} partnerConfig={data.partnerConfig} />
          {
            (this.state.home || this.state.action || this.state.similarStores || this.state.coupan || this.state.setting || this.state.issues) && 
            (
              <main>
                 {this.state.setting && <Settings settingsCheckboxValues={data.settingsCheckboxValues} partnerConfig={data.partnerConfig} />}
                 {this.state.home && <Home climateData={data}/>}
                 {this.state.action && <Action actionList={data.actionList} />}
                 {this.state.similarStores && <SimilarStore similarStores={data.similarStoreData} politicalData={data.politicalData} />}
                 {this.state.issues && <Issues issues={data.issues} politicalData={data.politicalData} />}
              </main>
            )
          }
          <Footer showHome={this.showHome}  
            showAction={this.showAction} 
            showSimilarStores={this.showSimilarStores} 
            showIssues = {this.showIssues}
            home={this.state.home}
            action={this.state.action}
            similarStores={this.state.similarStores} 
            issues = {this.state.issues}
            />
          
          
          
      </Fragment>
    );
  }
}

export default Popup;
