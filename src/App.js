import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={5} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={5} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={5} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={5} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={5} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}