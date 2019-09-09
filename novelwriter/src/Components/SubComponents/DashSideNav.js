import React, { Component } from 'react';

class DashSideNav extends Component {
    render() {
        return (
            <div className="pv3 w-100" style={{height:"20px"}}>
                  <div className="flex bg-light-gray">
                      <div className="bg-blue mr3" style={{minWidth:"5px"}}/>
                      <h4 className="pl4 pv3"><i className="fa fa-desktop pr2"/> Dashboard</h4>
                  </div>
                  <div className="flex hover-bg-light-gray">
                      <div className=" mr3" style={{minWidth:"5px"}}/>
                      <h4 className="pl4 pv3"><i className="fa fa-edit pr2"/> Preferences</h4>
                  </div>
                  <div className="flex hover-bg-light-gray">
                      <div className=" mr3" style={{minWidth:"5px"}}/>
                      <h4 className="pl4 pv3"><i className="fa fa-sign-out pr2"/> Signout</h4>
                  </div>
              </div>
        );
    }
}

export default DashSideNav;