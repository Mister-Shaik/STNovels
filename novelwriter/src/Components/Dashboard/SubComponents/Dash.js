import React, { Component } from 'react';
import NovelStats from './NovelStats';
import NovelList from './NovelList';

class Dash extends Component {
    render() {
        return (
            <div>
                <div className="pv2 mt3 ph4">
                    <h4>Welcome back!</h4>
                    <h2>Shaik sha</h2>
                </div>
                <NovelList novel="HIAN" />
                <NovelStats novel="HIAN" />
            </div>
        );
    }
}

export default Dash;