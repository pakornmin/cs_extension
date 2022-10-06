import React from 'react';
import 'static/css/common.css';


function TotalContributon(props) {
    

    return (
        <div className="progressiveshopper-donation-distribution--bar">
                <div className="progressiveshopper-donation-distribution__heading">POLITICAL DONATIONS</div>
                <div className="progressiveshopper-donation-distribution__bar progressiveshopper-donation-distribution__bar-democrat">
                <span className="progressiveshopper-donation-distribution__democrat" style={{width: `${props.politicalData.percentTotalDemocrats}%`}}></span>
                <span className="progressiveshopper-donation-distribution__label">{props.politicalData.percentTotalDemocrats}% Democrat</span>
                </div>
        </div>
        
    );
}

export default TotalContributon;