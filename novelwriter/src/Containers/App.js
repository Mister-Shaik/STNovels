import React, { Component } from 'react';
import 'tachyons';
import NavBar from '../Components/NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';
import Dashboard from './Dashboard';

class App extends Component {

  constructor(){
    super();
    this.state = {
      submenu: false,
      currentPage:"Dashboard"
    }
  }

  Submenu(){
    this.setState({submenu: !this.state.submenu})
  }

  render() {
    return (
      <div className="bg-light-gray" style={{height:"100vh"}}>
        <NavBar onClick={() => this.Submenu()}/>
        {this.state.currentPage === "Novel" ? 
        <div className="flex flex-row justify-center mr0">
          <SideBar opens={this.state.submenu}/>
          <MainContent />
        </div>
        :
        <Dashboard />
        }
      </div>
    );
  }
}

export default App;
