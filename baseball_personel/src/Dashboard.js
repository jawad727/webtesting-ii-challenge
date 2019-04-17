import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './baseball-stuff/Display'

class Dashboard extends Component {
  state = {
    strike: 0,
    Ball: 0,
    Foul: 0,
    Hit: false
  }

  strike = e => {
    e.preventDefault();

    var stroke = this.state.strike;


    this.setState({
      strike: stroke == 3 ? 0 : stroke + 1,
      Ball: stroke == 3 ? 0 : this.state.Ball,
      Foul: stroke == 3 ? 0 : this.state.Foul,
     
    })
  }

  ball = e => {
    e.preventDefault();

    var bawl = this.state.Ball;

    this.setState({
      strike: bawl == 4 ? 0 : this.state.strike,
      Ball: bawl == 4 ? 0 : bawl + 1,
      Foul: bawl == 4 ? 0 : this.state.Foul,
 
    })
  }

  foul = e => {
    e.preventDefault();

    var fawl = this.state.Foul;
    var stroke = this.state.strike;


    this.setState({

      strike: stroke < 2 ? stroke + 1 : 2 ,
      Foul: fawl + 1

    })
  }

   

  hit = e => {
    e.preventDefault();

    this.setState({
      strike: 0,
      Ball: 0,
      Foul: 0,
      Hit: this.state.Hit == false ? true : false
    })
  }





  render() {
    return (
      <div>


            <button onClick={this.strike}> Strike </button>
            <button onClick={this.ball}> Ball </button>
            <button onClick={this.foul}> Foul </button>
            <button onClick={this.hit}> Hit </button>


            <Display strikes={this.state.strike}
             balls={this.state.Ball}
             fouls={this.state.Foul}
             hits={this.state.Hit}
             />
        </div>
    );
  }
}

export default Dashboard;
