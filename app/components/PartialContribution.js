import React from 'react';
import ContributionChart from './chart';
import 'static/css/common.css';



function PartialContribution(props) {

    return (
        <ul className={"progressiveshopper-grid-layout "+ (props.isOnlyOneAvailable ? 'donation-distribution-ul' : 'progressiveshopper-grid-layout--mobile-2col')}>
                  {!!props.percentPacToDemocrats && 
                    <div className="progressiveshopper-donation-distribution--circular">
                      <div className="VictoryContainer" style={{width: '100%', height: '100%', pointerEvents: 'none', 'touchAction': 'none', position: 'relative'}}>
                        <ContributionChart percent = {props.percentPacToDemocrats}/>      
                      </div>
                      <div className="progressiveshopper-donation-distribution__label">PAC Donations</div>
                      <div className="progressiveshopper-number-stat">
                        <div className="progressiveshopper-number-stat__label">Democrat</div>
                        <div className="progressiveshopper-number-stat__number-container">
                          <span className="progressiveshopper-number-stat__leading-units"></span>
                          <span className="progressiveshopper-number-stat__number">{props.percentPacToDemocrats}</span>
                          <span className="progressiveshopper-number-stat__trailing-units">%</span>
                        </div>
                      </div>
                    </div>
                  }
                
                  {!! props.percentEmployeeToDemocrats && 
                    <div className="progressiveshopper-donation-distribution--circular">
                      <div className="VictoryContainer" style={{width: '100%', height: '100%', pointerEvents: 'none', 'touchAction': 'none', position: 'relative'}}>
                        <ContributionChart percent = {props.percentEmployeeToDemocrats}/>      
                      </div>
                      <div className="progressiveshopper-donation-distribution__label">Employee Donations</div>
                      <div className="progressiveshopper-number-stat">
                        <div className="progressiveshopper-number-stat__label">Democrat</div>
                        <div className="progressiveshopper-number-stat__number-container">
                          <span className="progressiveshopper-number-stat__leading-units"></span>
                          <span className="progressiveshopper-number-stat__number">{props.percentEmployeeToDemocrats}</span>
                          <span className="progressiveshopper-number-stat__trailing-units">%</span>
                        </div>
                      </div>
                    </div>
                  }
                </ul>
        
    );
}

export default PartialContribution;