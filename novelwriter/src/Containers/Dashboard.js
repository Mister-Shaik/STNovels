import React, { Component } from 'react';
import NovelStats from '../Components/NovelStats';
import NovelList from '../Components/NovelList';

class Dashboard extends Component {
    render() {
        return (
            <div className="pv3"  style={{maxHeight:"calc(100vh - 60px)",overflowY:"auto"}}>
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

export default Dashboard;