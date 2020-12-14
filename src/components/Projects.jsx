import React, { Component } from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { hover: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ hover: true });
    }

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
                                        <h3>EMS</h3>

                                        <Popup trigger={<button
                                            style={{
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit'
                                            }}>
                                            <a target="_blank">

                                                <img src="/images/employee-manager.png" alt="asp" height="200" />
                                                <br />
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-ASP.NET Core-green" alt="asp" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-C Sharp-green" alt="csharp" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-HTML-green" alt="html" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-CSS-green" alt="css" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-jQuery-green" alt="jquery" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Entity Framework Core-green" alt="efc" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-SQL Server-green" alt="sql" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-JSON-green" alt="json" height="25" /> </a>

                                            </a>

                                        </button>} position="center">

                                            <p style={{ color: 'grey' }}>
                                                • An Employee Management System developed for consolidating and managing employee data.
                                            </p>
                                        </Popup>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Puddle</h3>
                                        <Popup trigger={<button
                                            style={{
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit'
                                            }}>
                                            <a target="_blank">

                                                <img src="/images/puddle.png" alt="asp" height="200" />
                                                <br />
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Java-green" alt="java" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-JavaScript-green" alt="js" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Swift-green" alt="swift" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-green" alt="typescript" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Google Maps-green" alt="googlemaps" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Firebase-green" alt="firebase" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Xcode-green" alt="xcode" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Android Studio-green" alt="androidstudio" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-MongoDB-green" alt="mongodb" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Git-green" alt="git" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-DevOps-green" alt="devops" height="25" /> </a>

                                            </a>

                                        </button>} position="center">

                                            <p style={{ color: 'grey' }}> • Chat application for having discussions in groups called ’puddles’ to simplify teamwork. Designed for iOS and Android platforms.
                                            </p>
                                            <p></p>
                                        </Popup>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>INews</h3>
                                        <Popup trigger={<button
                                            style={{
                                                background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit'
                                            }}>
                                            <a target="_blank">

                                                <img src="/images/news.png" alt="asp" height="200" />
                                                <br />
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-React.js-green" alt="react" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Node.js-green" alt="node" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-JavaScript-green" alt="js" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-JSX-green" alt="jsx" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Context API-green" alt="contextapi" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Bootstrap-green" alt="bootstrap" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-Axios-green" alt="axios" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-News API-green" alt="newsapi" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-HTML-green" alt="html" height="25" /> </a>
                                                <a target="_blank"> <img src="https://img.shields.io/badge/-SASS-green" alt="sass" height="25" /> </a>
                                            </a>

                                        </button>} position="center">

                                            <p style={{ color: 'grey' }}> • Built for users to stay in sync with the latest news from news channels world over.
                                            </p>
                                            <p></p>


                                        </Popup>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>This website</h3>
                                        <p>It's under construction. Stay tuned for more.
                                        </p>
                                        <a target="_blank"> <img src="https://img.shields.io/badge/-React.js-green" alt="react" height="25" /> </a>
                                        <a target="_blank"> <img src="https://img.shields.io/badge/-Node.js-green" alt="node" height="25" /> </a>
                                        <a target="_blank"> <img src="https://img.shields.io/badge/-JavaScript-green" alt="js" height="25" /> </a>
                                        <a target="_blank"> <img src="https://img.shields.io/badge/-JSX-green" alt="jsx" height="25" /> </a>
                                        <a target="_blank"> <img src="https://img.shields.io/badge/-HTML-green" alt="html" height="25" /> </a>
                                        <a target="_blank"> <img src="https://img.shields.io/badge/-SASS-green" alt="sass" height="25" /> </a>
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