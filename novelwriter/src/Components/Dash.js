import React, { Component } from 'react';
import NovelStats from './SubComponents/NovelStats';
import NovelList from './SubComponents/NovelList';

class Dash extends Component {
    render() {
        return (
            <div>
                <div className="pv2 ph4 bg-light-gray">
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