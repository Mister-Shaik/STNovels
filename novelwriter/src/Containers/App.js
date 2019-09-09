import React, { Component } from 'react';
import 'tachyons';
import NavBar from '../Components/NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

class App extends Component {

  constructor(){
    super();
    this.state = {
      submenu: true,
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
        <div className="flex flex-row justify-center mr0">
          <SideBar opens={this.state.submenu}  page={this.state.currentPage}/>
          <MainContent page={this.state.currentPage}/>
        </div>
      </div>
    );
  }
}

export default App;
