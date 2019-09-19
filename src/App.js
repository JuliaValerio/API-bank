import React, { Component } from 'react';
import './style.css';
import Header from './components/Header';
import Routes from './routes';

export default class App extends Component {
  render(){
    return(
      <div className="app">
      <Header />
      <Routes />
      </div>
    )
  }
}

