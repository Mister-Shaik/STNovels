import React, { Component } from 'react';
import Sidenav from '../Components/SubComponents/Sidenav';
import DashSideNav from '../Components/SubComponents/DashSideNav';
import Plot from '../Components/SubComponents/Plots'

class SideBar extends Component {

    constructor(){
        super();
        this.state = {
            Aside:true,
            AsideContent:"Plo"
        }
    }
    // If current page is set to Dashboard, show Dasboard side navigation
    // else display Side nav and trackers
    // If sidenav or trackers clicked, Replace the side navigation to the item data
    render() {
        return (
            <div className="pr0 db overflow-y-auto overflow-x-hidden bg-white shadow" style={{height:"calc(100vh - 62px)",transition:"0.8s",width:this.props.opens === true ? "35%":"0"}}>
                {this.props.page === "Dashboard" ? <DashSideNav /> : 
                (this.state.Aside === false ? <div>
                    <Sidenav name="Chapters" />
                    <Sidenav name="Plots" />
                    <Sidenav name="Trackers" />
                </div>:
                <Plot name="Tian Long" Asidetype={this.state.AsideContent} />)
            }

            </div>
        );
    }
}

export default SideBar;