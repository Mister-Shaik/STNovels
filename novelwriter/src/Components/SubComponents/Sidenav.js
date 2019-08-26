import React, { Component } from 'react';
import Lists from './Lists';

class Sidenav extends Component {
    render() {
        return (
            <div className="mb2 overflow-y-auto">
                <h5 className="pa2 shadow-1 white" style={{backgroundColor:"#ff2e63", color:"#eaeaea"}}>
                    {this.props.name}
                </h5>
                <Lists name={this.props.name}/>
                <div className="tc hover-bg-light-gray pa1 pt2">
                    <h5><i className="fa fa-plus-circle fa-1x"></i> Add</h5>
                </div>
            </div>
        );
    }
}

export default Sidenav;