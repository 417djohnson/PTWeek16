import React, { Component } from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import "./App.css";
import buster from "./images/buster.jpg";
import ella from "./images/ella.jpg";
import bonnie from "./images/bonnie.jpg";
 
export default class App extends Component {
  static defaultProps =  {
    members: [
    {
        name: "Bonnie",
        src: bonnie,
        about: "Specializes in deep tissue and neuromuscular therapy."
    },
    {
        name: "Buster",
        src: buster,
        about: "Specializes in Cranial Sacrial and Lomi Lomi."
    },
    {
        name: "Ella",
        src: ella,
        about: "Specializes in Swedish and Pre-Natal therapy."
    }, 
        ]
  }
  render() {   
    return (
      <div>
          <Navbar members={this.props.members} />
          <div className='App'>
          <Routes members={this.props.members} />
          </div>
      </div>
    );
  }
}
