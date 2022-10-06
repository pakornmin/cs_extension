import React, { Component, Fragment } from 'react';
import 'static/css/common.css';

class Issues extends Component {  
  constructor(props) {
        super(props);
        this.top_three = this.props.top_three;
        //this.state = {
        //    open: false
        //};
  }

  parseName(name) {
    let parsedName = name.replaceAll(' ', '_');
    parsedName = parsedName + '.jpg';
    return parsedName;
  }

  onIssueBoxClick = ()=>{
     this.setState({open: !this.state.open})
  }
  
  render() {
    const top_three = this.top_three;
    if(!top_three || top_three.length == 0) {
        return (<section>
            <div className='issue'> 
                <div className='issues-heading'>
                    <h2 className="progressiveshopper-item-summary__title">No Available Information</h2>
                </div>
                <div className="issues-list">
                </div>
                
                    
                <div className="wp-block-buttons">
                    <div className="wp-block-button is-style-primary">
                        <a className="wp-block-button__link" href={``}>Learn More</a>
                    </div>
                </div>
            </div>
        </section>);
    }
    return (
        <Fragment>
            <div style={{alignContent: 'center', justifyContent: 'center'}}>
            <ul>
                    {top_three.map((senate, i) => (
                        <Fragment key={i}>
                            <li className="progressiveshopper-rating-list">
                                <p className="progressiveshopper-rating">
                                    
                                    <img style={{  
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                                width: '8rem',
                                                height: '8rem',
                                                background: "black",
                                                display: "inline-flex"}}
                                          src={`https://cs-climate-deniers.s3.amazonaws.com/${this.parseName(senate)}`} />              
                                    
                                    <span className="progressiveshopper-issue-rating-text">
                                        {senate}
                                    </span>
                                </p>
                            </li>
                        </Fragment>
                    ))} 
                  </ul>
            </div>   
        </Fragment>
    );

  }
}

export default Issues;
