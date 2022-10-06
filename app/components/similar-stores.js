import React, { Component, Fragment} from 'react';
import 'static/css/common.css';
import analytics from 'helpers/analytics.js'
class SimilarStore extends Component {
  constructor(props) {
    super(props);
    this.politicalData = this.props.politicalData;
    this.statusMap = {
        YES:'good.svg',
        OK:'ok.svg',
        NO:'bad.svg'
    }
  }
  onCompanyLinkClick(link){
    analytics.sendEvent('CompetitorsClicked');
    window.openLinkNewTab(link);
  }
  componentDidMount(){
      analytics.sendEvent( 'CompetitorsPageAppeared');
  }
  getStyles = (width) => {
    return {
       width: `${width}%`
    }
  }
  render() {
   
    const similarStores = this.props.similarStores.filter(store => {
       return this.props.merchantDomain !== store.brandDomain;
    });
    const category = this.props.politicalData.primarySubcategory ? this.props.politicalData.primarySubcategory : this.props.politicalData.subCategory;
    
    return (
        <div className="similar-stores-section">
            <div className="similar-stores">
                <div className="similar-store-heading">
                    <h2 className="progressiveshopper-item-summary__title">{category}</h2>
                </div>
                <div className="similar-store-list">
                    <ul>
                        {similarStores.map((similarStore, i) => (
                            <Fragment key={i}>
                                <li className="progressiveshopper-rating-list" style = {{padding:10}}onClick={() => this.onCompanyLinkClick(similarStore.affiliateLink)}>
                                    <p className="progressiveshopper-rating">
                                            <img src={`static/images/${this.statusMap[similarStore.shopStatus]}`} width="27"/>              
                                        <span className="progressiveshopper-rating-text" >
                                            &nbsp;&nbsp;&nbsp;
                                        </span>
                                        <span>
                                            <img className="logo-similar-stores" src={`${similarStore.logoUrl}`} />
                                        </span>
                                        
                                    </p>
                                </li>
                            </Fragment>
                        ))} 
                    </ul>
                </div>
            </div>
            <div className="wp-block-buttons">
                <div className="wp-block-button is-style-primary">
                    <a className="wp-block-button__link" href={`https://progressiveshopper.com/category/#/${category}`}>Learn More</a>
                </div>
			</div>
        </div>
    );
  }
}

export default SimilarStore;
