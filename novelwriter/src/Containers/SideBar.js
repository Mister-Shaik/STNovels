import React, { Component } from 'react';
import Sidenav from '../Components/SubComponents/Sidenav';
import DashSideNav from '../Components/SubComponents/DashSideNav';

class SideBar extends Component {
    render() {
        return (
            <div className="pr0 db overflow-y-auto overflow-x-hidden bg-white shadow" style={{height:"calc(100vh - 62px)",transition:"0.8s",width:this.props.opens === true ? "25%":"0"}}>
                {this.props.page === "Dashboard" ? <DashSideNav /> : 
                <div>
                    <Sidenav name="Chapters" />
                    <Sidenav name="Plots" />
                    <Sidenav name="Trackers" />
                </div>}

            </div>
        );
    }
}

export default SideBar;