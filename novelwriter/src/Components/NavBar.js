import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="pv1 ph3 flex flex-row justify-between white" style={{Maxheight:"60px", backgroundColor:"#252a34"}}>
                <div className="flex flex-row">
                    <i className="pa1 pr4 pt2 fa fa-bars fa-2x" onClick={() => this.props.onClick()}></i>
                    <h3 className="ma0 pa1">STNovels</h3>
                </div>
                <div>
                    <h4 className="pa2">Welcome</h4>
                </div>
                <div>
                    <i className="pa1 fa fa-gear fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default NavBar;