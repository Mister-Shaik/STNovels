import React, { Component } from 'react';

class NovelList extends Component {
    constructor()
    {
        super()
        this.state={
            list:["hiaw","avl"],
            novel:"",
            words:"",
            chapters:"",
            lastedit:""
        }
    }
    render() {
        return (
            <div className="ph4 pv3">
                <div className="tc card pa3 f3">
                    <select style={{border:"none",minWidth:"150px"}} onChange={(e) => {console.log(e.target.value)}}>
                        {this.state.list.map(novel => 
                            <option value={novel} key={novel}>{novel}</option>
                        )}
                    </select>
                </div>
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Novel title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Do you want to delete this novel?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default NovelList;