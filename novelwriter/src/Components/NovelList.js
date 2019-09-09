import React, { Component } from 'react';

class NovelList extends Component {
    render() {
        return (
            <div className="ph4 pv3">
                <div className="card pa3">
                    <h3><select style={{border:"none"}}>
                        <option>HIAW</option>
                        <option>A Valiant Life</option>
                    </select></h3>
                    <p>xxx words   xxx chapters    last edited xxxx    download     delete</p>
                </div>
            </div>
        );
    }
}

export default NovelList;