import React, { Component } from 'react';

class DashSideNav extends Component {

      // Use Navlinks for side dash nav
      // Wrap div and h4
      // when link is clicked it has class active
      // .active > div{ visibility: visible}
      // .active > 1stparent { background: gray} 
      // initially all of them will have visibility hidden 
    render() {
        return (
            <div className="pv3 w-100" style={{height:"20px"}}>
                  <div className="flex hover-bg-light-gray w-spc-nowrap">
                        <div className="bg-blue mr3 visible-hidden" style={{minWidth:"5px"}}/>    
                        <h4 className="pl4 pv3"><i className="fa fa-desktop pr2"/> Dashboard</h4>
                  </div>
                  <div className="flex bg-light-gray w-spc-nowrap">
                        <div className="bg-blue mr3 visible-hidden" style={{minWidth:"5px"}}/>                        
                        <h4 className="pl4 pv3"><i className="fa fa-book pr2"/> Workspace</h4>
                  </div>
                  <div className="flex hover-bg-light-gray w-spc-nowrap">
                        <div className="bg-blue mr3 visible-hidden" style={{minWidth:"5px"}}/>    
                        <h4 className="pl4 pv3"><i className="fa fa-edit pr2"/> Preferences</h4>
                  </div>
                  <div className="flex hover-bg-light-gray w-spc-nowrap">
                        <div className="mr3 visible-hidden" style={{minWidth:"5px"}}/>    
                        <h4 className="pl4 pv3"><i className="fa fa-sign-out pr2"/> Signout</h4>
                  </div>
              </div>
        );
    }
}

export default DashSideNav;