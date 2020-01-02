import React, { Component } from 'react'
import Sidenav from './SubComponents/Sidenav'
import Plot from './SubComponents/Plots'
import {connect} from 'react-redux';

class ChapSideNav extends Component {
    render() {
        return (
            <div>
                {this.props.SideElementVisible ? 
                <div>
                <Sidenav name="Chapters" />
                <Sidenav name="Plots" /> 
                <Sidenav name="Trackers" />
                </div>
                :<Plot name="Tian Long" /> 
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    SideElementVisible: state.Navigation.SideElementVisible
});

export default connect(mapStateToProps)(ChapSideNav);