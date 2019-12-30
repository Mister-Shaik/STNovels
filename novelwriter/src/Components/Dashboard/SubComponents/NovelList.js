import React, { Component } from 'react';

class NovelList extends Component {
    constructor()
    {
        super()
        this.state={
            list:["hiaw","avl"]
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
            </div>
        );
    }
}

export default NovelList;