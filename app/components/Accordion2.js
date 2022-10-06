import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import 'static/css/common.css';

import "./Accordion.css";
import PartialContribution from "./PartialContribution";

function Accordion2(props) {
  const [setActive, setActiveState] = useState("active");
  const [setHeight, setHeightState] = useState("170px");
  const [setRotate, setRotateState] = useState("accordion__icon rotate");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <div>
        <p className="progressiveshopper-rating">
                <span className="progressiveshopper-icon progressiveshopper-icon--large">
                  {console.log(props)}
                    <img src={`static/images/${props.statusMap[props.shopStatus]}`}/>           
                </span> 
                {props.politicalData.summaryHeadLine}
            <Chevron className={`${setRotate}`} width={15} fill={"#777"} />
        </p>
        </div>
        
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content">
            <PartialContribution 
                  politicalData={props.politicalData} 
                  statusMap={props.statusMap}
                  isOnlyOneAvailable={props.isOnlyOneAvailable}
                  percentPacToDemocrats={props.percentPacToDemocrats}
                  percentEmployeeToDemocrats={props.percentEmployeeToDemocrats}/>
      </div>
    </div>
  );
}

export default Accordion2;
