import React, { Component } from 'react';
import logo from './logo.svg';
import AppRouter from './App.router';
import './App.css';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }  
  //navbar-expand-lg navbar-dark bg-dark
  render() {
    return (
      <div>
        <div className="div-nav-bar">
          <Navbar color="dark" dark expand="lg">        
            <NavbarBrand href="https://github.com/aasf86" target="outside">
              @aasf86            
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to='/professor/' className="nav-link active">Professor</Link>
                </NavItem>
                <NavItem>
                  <Link to='/' className="nav-link">Github</Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <img src={logo} className="App-logo" alt="logo" />
              </Nav>
            </Collapse>
          </Navbar>        
        </div>
        <div className="div-container">
          <div className="card">
            <div className="card-body">
              <AppRouter />
            </div>          
          </div>          
        </div>        
      </div>
    );
  }
}

export default App;
