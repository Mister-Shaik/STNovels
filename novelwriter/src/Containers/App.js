import React, { Component } from 'react';
import 'tachyons';
import NavBar from '../Components/NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

class App extends Component {

  //Temporary solution to set pages as dashboard and chapter content using states
  constructor(){
    super();
    this.state = {
      submenu: true,
      currentPage:"Dashboard"
    }
  }

  // Show/Hide side bar using the set state and opens
  Submenu(){
    this.setState({submenu: !this.state.submenu})
  }

  // Show Navbar, which has side bar control and settings button
  // A flex which contains the Maincontent and side bar
  // we can change the Main Content as Dashboard or Novel Writer, using states
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
