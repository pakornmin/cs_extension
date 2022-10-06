import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const ContributionChart = (props) => {

    //console.log(props);

    const placeHolder = (100-props.percent)*235.62 / 100;
    const finalAttribute = placeHolder + ' 235.62';
    //console.log(finalAttribute);

    
    return ( 
        <Fragment>
            <svg width="200" height="200" viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <circle
                cx="100"
                cy="100"
                r="75"
                style={{ padding: 10 }}
                fill="#0057A8"
                stroke="transparent"
            ></circle>
            <circle
                cx="100"
                cy="100"
                r="37.5"
                fill="transparent"
                stroke="#9C0000"
                strokeDasharray= {finalAttribute}
                strokeWidth="75"
                transform="rotate(-90 100 100)"
            ></circle>
            <circle cx="100" cy="100" r="53" fill="#fff"></circle>
            </svg>
        </Fragment>
    );
}

export default ContributionChart;