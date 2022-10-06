import React, { Component, Fragment } from 'react';
import 'static/css/common.css';
import analytics from 'helpers/analytics.js'
import Accordion from './Accordion';
import TotalContributon from './TotalContribution';
import Accordion2 from './Accordion2';

class Home extends Component {
  constructor(props) {
        super(props);
        this.climateData = this.props.climateData;
        this.totalContributon = this.climateData.total;
        this.allContributions = this.climateData.contributions;
        this.url = this.climateData.url;
        this.logoUrl = this.climateData.iconPath;
        this.statusMap = {
          YES:'good.svg',
          OK:'ok.svg',
          NO:'bad.svg'
      }

  }


  parseName(name) {
    let parsedName = name.replaceAll(' ', '_');
    parsedName = parsedName + '.jpg';
    return parsedName;
  }



  componentDidMount(){
      analytics.sendEvent( 'HomePageAppeared');
  } 

  
  render() {
    console.log(this.totalContributon);
    return (
		    <div className="progressiveshopper-app-container">
          <div className='home'>
            <div className="progressiveshopper-item-summary">
              <div className="progressiveshopper-item-summary__header">
                <div className="progressiveshopper-image-badge">
                  <img src={`${this.logoUrl}`}/>
                </div>
                <div>
                  <a><h2 className="progressiveshopper-item-summary__title">{this.climateData.name}</h2></a>
                </div>
              </div>
            </div>
            <div className='home-detail'>
              {!!this.totalContributon && 
                <div>
                  <div className='progressiveshopper-rating' style={{textAlign: "center", fontSize: '1.8rem'}}>
                    <text>{this.climateData.name} has donated  </text>
                    <text style={{ color: 'green' }} >{this.totalContributon.toLocaleString("en-US", {style:"currency", currency:"USD", maximumSignificantDigits: 3 })} </text>
                  </div>
                  <p className='progressiveshopper-rating' style={{textAlign: "center", fontSize: '1.8rem'}}>
                    to climate deniers.
                  </p>
                  
                  <Accordion top_three ={this.climateData.top_three}></Accordion>


                  
                </div>
              }
              {!this.totalContributon && 
                <div className="progressiveshopper-donation-distribution__label">No Data Available</div>
              }
            </div>
            
          </div>
          <div className="wp-block-buttons">
              <div className="wp-block-button is-style-primary" style = {{marginTop: '5px'}}>
                <a className="wp-block-button__link" href={``}>Learn More</a>
              </div>
            </div>
        </div>
    );
  }
}

export default Home;
