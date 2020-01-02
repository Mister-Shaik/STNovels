import React, { Component } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';
import './App.css';

class App extends Component {
  // Show Navbar, which has side bar control and settings button
  // A flex which contains the Maincontent and side bar
  // we can change the Main Content as Dashboard or Novel Writer, using Routes
  render() {
    return (
        <div className={"glb-f glb-bg-c h-vh-100 "}>
          <NavBar />
            <div className="flex flex-row justify-center mr0">
              <SideBar />
              <MainContent />
            </div>
        </div>
      );
  }
}

export default App;
