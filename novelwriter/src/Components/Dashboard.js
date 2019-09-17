import React, { Component } from 'react';
import Novel from './Novel';
import Preferences from './Preferences';

class Dashboard extends Component {
    render() {
        return (
            <div className="pv3"  style={{maxHeight:"calc(100vh - 60px)",overflowY:"auto"}}>
                {/* <Novel /> */}
                <Preferences />
            </div>
        );
    }
}

export default Dashboard;