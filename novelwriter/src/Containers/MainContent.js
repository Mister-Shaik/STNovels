import React, { Component } from 'react';
import TrackersContent from '../Components/TrackersContent';

class MainContent extends Component {
    render() {
        return (
            <div className="w-75 overflow-y-auto bg-light-gray" style={{height:"calc(100vh - 62px)"}}>
                <TrackersContent />
            </div>
        );
    }
}

export default MainContent;