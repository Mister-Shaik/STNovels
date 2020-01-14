import React, { Component } from 'react';
import Lists from './Lists';

class Sidenav extends Component {
    render() {
        return (
            <div className="mb2 overflow-y-auto overflow-x-hidden">
                <h5 className="pa2 shadow-1 white chap-sidenav-c">
                    {this.props.name}
                </h5>
                <Lists name={this.props.name}/>
                <button type="button" className="btn hover-bg-light-gray center w-100 pa1 pt2 w-spc-nowrap" data-toggle="modal" data-target={"#" + this.props.name}>
                <i className="fa fa-plus-circle fa-1x"></i> Add
                </button>


                <div className="modal fade" id={this.props.name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body center">
                        <label>Title : </label>
                        <input type="text" className="btn ma2" placeholder="Type here" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}

export default Sidenav;