import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
