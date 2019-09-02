import React, { Component } from 'react';
import Sidenav from '../Components/SubComponents/Sidenav';

class SideBar extends Component {
    render() {
        return (
            <div className="pr0 db overflow-y-auto overflow-x-hidden bg-white" style={{height:"calc(100vh - 62px)",transition:"0.8s",width:this.props.opens === true ? "25%":"0"}}>
                <Sidenav name="Novels" />
                <Sidenav name="Plots" />
                <Sidenav name="Trackers" />
            </div>
        );
    }
}

export default SideBar;