import React, { Component } from 'react';
import Dash from './SubComponents/Dash';
import Preferences from './SubComponents/Preferences';
import Workspace from './SubComponents/Workspace';

class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            Current:"Preferences"
        }
    }

    render() {
        return (
            <div style={{maxHeight:"calc(100vh - 60px)",overflowY:"auto"}}>
                {this.state.Current === "Dash"?<Dash />: this.state.Current === "Preferences" ? <Preferences /> : <Workspace />}
            </div>
        );
    }
}

export default Dashboard;