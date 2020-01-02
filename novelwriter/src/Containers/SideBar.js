import React, { Component } from 'react'
import DashSideNav from '../Components/Dashboard/DashSideNav'
import ChapSideNav from '../Components/ChapContent/ChapSideNav'
import {connect} from 'react-redux'

    // If current page is set to Dashboard, show Dasboard side navigation
    // else display Side nav and trackers
    // If sidenav or trackers clicked, Replace the side navigation to the item data
class SideBar extends Component{
    render(){
        return (
            <div className="pr0 db overflow-y-auto overflow-x-hidden shadow bg-white" style={{height:"calc(100vh - 62px)",transition:"0.8s",width:this.props.SideMenuVisible === true ? "35%":"0"}}>
                {this.props.CurrentPage === "Novel"?<ChapSideNav /> : <DashSideNav />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    SideMenuVisible : state.Navigation.SideMenuVisible,
    CurrentPage: state.Navigation.CurrentPage
})

SideBar = connect(mapStateToProps)(SideBar); 
export default connect(mapStateToProps)(SideBar);