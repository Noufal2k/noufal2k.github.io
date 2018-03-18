import React, { Component } from 'react';
import './App.css';
import Header from "../components/Header";
import About from "../components/About";
import Projects from '../components/Projects';
import ProfileBody from '../components/ProfileBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileBody>
          <About />
          <Projects />
        </ProfileBody>
        {/*
        <CardList>
          <Card />
        </CardList>
        */}
      </div>
    );
  }
}

export default App;
