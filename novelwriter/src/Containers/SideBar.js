import React, { Component } from 'react'
import DashSideNav from '../Components/Dashboard/DashSideNav'
import ChapSideNav from '../Components/ChapContent/ChapSideNav'
//import {Route} from 'react-router-redux'
import {connect} from 'react-redux'


    // If current page is set to Dashboard, show Dasboard side navigation
    // else display Side nav and trackers
    // If sidenav or trackers clicked, Replace the side navigation to the item data
class SideBar extends Component{
    render(){
        return (
            <div className="pr0 db overflow-y-auto overflow-x-hidden shadow" style={{height:"calc(100vh - 62px)",transition:"0.8s",width:this.props.SideMenuVisible === true ? "35%":"0"}}>
                {/* <Route exact path="/" component={ChapSideNav} />    
                <Route exact path="/Dashboard" component={DashSideNav} />  */}
                <ChapSideNav />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    SideMenuVisible : state.SideMenuVisible
})

SideBar = connect(mapStateToProps)(SideBar); 
export default connect(mapStateToProps)(SideBar);