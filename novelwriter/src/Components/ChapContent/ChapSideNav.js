import React, { Component } from 'react'
import Sidenav from './SubComponents/Sidenav'
import Plot from './SubComponents/Plots'

class ChapSideNav extends Component {
    render() {
        return (
            <div>
                {/* <Sidenav name="Chapters" />
                <Sidenav name="Plots" />
                <Sidenav name="Trackers" />*/}
                <Plot name="Tian Long" Asidetype="Hero of Lord" /> 
            </div>
        )
    }
}
export default ChapSideNav;