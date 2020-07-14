import React, { Component } from "react";
import AboutMe from "./components/AboutMe";
import "./App.css";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import boilerText from "./BoilerText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Hi, I'm Nicky"
          subtitle={boilerText}
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
        <Section
          title="Section 4"
          subtitle={boilerText}
          dark={false}
          id="section4"
        />
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
