import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="pv1 ph3 flex white" style={{Maxheight:"60px", backgroundColor:"#252a34"}}>
                <div className="flex align-self-center justify-content-start" style={{marginRight:"auto",flex:"1"}}>
                    <i className="pr4 fa fa-bars fa-2x" onClick={() => this.props.onClick()} />
                    <h3 className="ma0">STNovels</h3>
                </div>
                <div className="flex align-self-center justify-content-center" style={{flex:"1"}}>
                    <h4 className="pa2">Welcome</h4>
                </div>
                <div className="flex align-self-center justify-content-end" style={{marginLeft:"auto",flex:"1"}}>
                    <i className="fa fa-gear fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default NavBar;