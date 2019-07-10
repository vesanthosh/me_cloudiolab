import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
