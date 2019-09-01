import React, { Component } from 'react';
import NovelStats from '../Components/NovelStats';
import NovelList from '../Components/SubComponents/NovelList';

class Dashboard extends Component {
    render() {
        return (
            <div className="pa5">
                <div className="pv2 ph6 bg-light-gray">
                    <h4>Welcome back!</h4>
                    <h2>Shaik sha</h2>
                </div>
                <NovelList novel="HIAN" />
                <NovelStats novel="HIAN" />
            </div>
        );
    }
}

export default Dashboard;