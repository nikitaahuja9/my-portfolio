import React, {Component} from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

export default class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	
           <Sidebar></Sidebar>

          {/* <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
          </div> */}

      	</div>
      </div>
    )
  }
}