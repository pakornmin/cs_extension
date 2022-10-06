import React, { Component } from 'react';
import 'static/css/common.css';
import analytics from 'helpers/analytics.js'
import HomeIcon from './home-icon';
import SimilarStoreIcon from './similar-stores-icon';
import TakeActionIcon from './TakeActionsIcon';

class Footer extends Component {
  constructor(props) {
    super(props);
    
  }
  onHomeClick = (e)=>{
    analytics.sendEvent('HomeTabClicked');
    this.props.showHome();
    e.preventDefault();
  }
  onActionClick = (e)=>{
    analytics.sendEvent('ActionTabClicked');
    this.props.showAction();
    e.preventDefault();
  }
  onSimilarStoresClick = (e)=>{
    analytics.sendEvent('SimilarStoreTabClicked');
    this.props.showSimilarStores();
    e.preventDefault();
  }
  
  render() {
   
    return (
      <div className="header-navigation-wrapper">
        <nav className="expanded-menu-wrapper" aria-label="Horizontal" role="navigation" style={{align: "center"}}>
            <ul className="expanded-menu">
              <li onClick={this.onHomeClick} id="menu-item-631"  className={"menu-item "+ (this.props.home ? 'current-menu-item' : '')}><a href="#"> <HomeIcon width="108" height="20" fill="#fff" /> </a></li>
              <li onClick={this.onSimilarStoresClick} id="menu-item-488" className={"menu-item "+ (this.props.similarStores ? 'current-menu-item' : '')}><a href="#"> <SimilarStoreIcon width="108" height="20" fill="#fff" /> </a></li>
              <li onClick={this.onActionClick} id="menu-item-490"  className={"menu-item "+ (this.props.action ? 'current-menu-item' : '')}><a href="#"> <TakeActionIcon width="108" height="20" fill="#fff" /> </a></li>
            </ul>
        </nav>
    </div>
    );
  }
}
export default Footer;
