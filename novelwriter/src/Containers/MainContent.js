import React, { Component } from 'react';
import ChapterContent from '../Components/ChapContent/ChapterContent'
import Dashboard from '../Components/Dashboard/Dashboard'
//import {Route} from 'react-router-redux'

class MainContent extends Component {
    render() {
        return (
            <div className="w-100 glb-bg-c">
                {/*<Route exact path="/" Component={ChapterContent} />*/}
                {/*<Route exact path="/dashboard" Component={Dashboard} />*/}
                {/* this.props.page === "Dashboard" ? <Dashboard /> : <ChapterContent /> */}
                
                <ChapterContent />
            </div>
        );
    }
}

export default MainContent;