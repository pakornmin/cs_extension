import React, { Component } from 'react';
import Popup from 'components/popup';
import Slider from 'components/Slider';
import Ribbon from 'components/ribbon';
import 'static/css/common.css';

class Extension extends Component {
  constructor(props) {
    super(props);
    //console.log('extension.js: ', this.props);
    this.climateData = this.props.data ? this.props.data : null;
    if(this.climateData){
        this.shopStatus = this.climateData.shopStatus;
    }
  }

  render() {
    return (
      <div>
        {this.props.popup && 
          (
          <div id="pages">
              <Popup data={this.props.data}/>
          </div>
          )
        }
        {this.props.ribbon && 
          (
          <Ribbon climateData={this.props.data} shopStatus = {this.shopStatus}/>
          )
        }
      </div>
      
    );
   
  }
}

export default Extension;
