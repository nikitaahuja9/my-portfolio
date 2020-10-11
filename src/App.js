import React, {Component} from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

const Buttons = ({ onToggle }) => (
  <div className="buttons">
    <button name="introduction" onClick={onToggle}>
      Introduction
    </button>
    <button name="about" onClick={onToggle}>
      About
    </button>
    <button name="projects" onClick={onToggle}>
      Projects
    </button>
    <button name="contact" onClick={onToggle}>
      Contact
    </button>
  </div>
);

const Main = ({ activeSection }) => (
  <React.Fragment>
    <Introduction activeSection={activeSection} />
    <About activeSection={activeSection} />
    <Projects activeSection={activeSection} />
    <Contact activeSection={activeSection} />
  </React.Fragment>
);


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSection: ""
    };

    this.handleToggleSection = this.handleToggleSection.bind(this);
  }

  handleToggleSection(e) {
    const { name } = e.target;
    this.setState(() => ({
      activeSection: name
    }));
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	
          <Sidebar></Sidebar>

          <div id="colorlib-main">
            <Introduction >
              <Buttons onToggle={this.handleToggleSection} />
              <Main activeSection={this.state.activeSection} />

            </Introduction>

            <About></About>
            <Projects></Projects>
            <Contact></Contact>
          </div>

      	</div>
      </div>
    )
  }
}