import React, { Component } from 'react';

export default class Introduction extends Component {

  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
                <li style={{ backgroundImage: 'url(images/nikita-ahuja.gif)' }}>
                  <div className="overlay" />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                          <div className="desc">
                            <h1>Hi there! I'm Nikita</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> 

              {/* <li style={{ backgroundImage: 'url(images/background.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>A little about me..</h1>

                          <p><a className="btn btn-primary btn-learn"
                            data-nav-section="about"
                          >View Resume <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
              <li style={{ backgroundImage: 'url(images/nikita-ahuja.gif)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Check out my work</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/nikitaahuja9" target="_blank" rel="noopener noreferrer">View Github <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/nikita-ahuja.gif)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Connect with me</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://linkedin.com/in/nikitaahuja9" target="_blank" rel="noopener noreferrer">View LinkedIn <i className="icon-linkedin2" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}