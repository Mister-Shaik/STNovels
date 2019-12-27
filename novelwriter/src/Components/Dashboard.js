import React, { Component } from 'react';
import Dash from './Dash';
import Preferences from './Preferences';
import Workspace from './Workspace';

class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            Current:"Dash"
        }
    }

    render() {
        return (
            <div  style={{maxHeight:"calc(100vh - 60px)",overflowY:"auto"}}>
                {this.state.Current === "Dash"?<Dash />: this.state.Current === "Preferences" ? <Preferences /> : <Workspace />}
            </div>
        );
    }
}

export default Dashboard;