import React, { Component } from 'react';
import ChapterContent from '../Components/ChapContent/ChapterContent'
import Dashboard from '../Components/Dashboard/Dashboard'
import {connect} from 'react-redux'

class MainContent extends Component {
    render() {
        return (
            <div className="w-100 glb-bg-c">
                {this.props.CurrentPage === "Novel" ? <ChapterContent /> : <Dashboard />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    CurrentPage: state.Navigation.CurrentPage,
})

MainContent = connect(mapStateToProps)(MainContent); 
export default connect(mapStateToProps)(MainContent);