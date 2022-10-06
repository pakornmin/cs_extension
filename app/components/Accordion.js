import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import Issues from "./issues";

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

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
    <div className="accordion__section" style={{alignContent: 'center', justifyContent: 'center'}}>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion} style={{alignContent: 'center', justifyContent: 'center'}}>
        <div className="accordion__title" style={{alignContent: 'center', justifyContent: 'center'}}>
            Top 3 Reciepients
            <Chevron className={`${setRotate}`} width={15} fill={"#777"} />
        </div>
        
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content">
            <Issues top_three = {props.top_three} />
      </div>
    </div>
  );
}

export default Accordion;
