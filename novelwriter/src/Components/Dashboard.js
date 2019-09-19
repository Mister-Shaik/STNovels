import React, { Component } from 'react';
// import Novel from './Novel';
// import Preferences from './Preferences';
import Workspace from './Workspace';

class Dashboard extends Component {
    render() {
        return (
            <div  style={{maxHeight:"calc(100vh - 60px)",overflowY:"auto"}}>
                {/* <Novel /> */}
                {/* <Preferences /> */}
                <Workspace />
            </div>
        );
    }
}

export default Dashboard;