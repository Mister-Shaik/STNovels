import React, { Component } from 'react';
import ChapterContent from '../Components/ChapterContent'
import Dashboard from '../Components/Dashboard'
import TrackersContent from '../Components/TrackersContent'

class MainContent extends Component {
    render() {
        return (
            <div className="w-100">
                {this.props.page === "Dashboard" ? <Dashboard /> : <ChapterContent />}
            </div>
        );
    }
}

export default MainContent;