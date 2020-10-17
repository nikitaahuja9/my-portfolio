import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-hero" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading">My Projects</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">

                            <div className="col-md-4 text-center animate-box">

                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>INews</h3>
                                        <p>A Web Application developed using the React.js Framework and structured using the MVC design pattern, that allows users to browse the latest news posted by Indian News channels sorted by category.
                                            <br />
                                            Technologies: React, Node, JavaScript, HTML, CSS, SASS, Axios (HTTP client), Context API, News API
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Project 2</h3>
                                        <p>Description</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Project 3</h3>
                                        <p>Description</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Project 4</h3>
                                        <p>Description</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Project 5</h3>
                                        <p>Description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}