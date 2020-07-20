import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import boilerText from "./BoilerText";
import AboutMe from "./AboutMe";
import Timeline from "./components/Timeline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Hi, I'm Nicky ✨"
          subtitle={AboutMe}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={boilerText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={boilerText}
          dark={true}
          id="section3"
        />
        <Section title="Timeline" dark={false} id="section4" />
        <Timeline />
        <Section
          title="Section 5"
          subtitle={boilerText}
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
