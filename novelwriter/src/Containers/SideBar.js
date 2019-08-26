import React, { Component } from 'react';
import Sidenav from '../Components/SubComponents/Sidenav';
import {Collapse} from 'reactstrap';

class SideBar extends Component {
    render() {
        return (
            <Collapse isOpen={this.props.opens} className="w-25 pr0 overflow-y-auto bg-white" style={{height:"calc(100vh - 62px)"}}>
                <Sidenav name="Novels" />
                <Sidenav name="Plots" />
                <Sidenav name="Trackers" />
            </Collapse>
        );
    }
}

export default SideBar;