import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading">Contact Info</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="desc">
                                    <h3>Location <i className="icon-location"/></h3>
                                    <p>Dubai, United Arab Emirates</p>
                                </div>
                            </div>


                            
                                <div className="col-md-4 text-center animate-box">
                                    <div className="desc">
                                        <h3>Email <i className="icon-mail"/></h3>
                                        <p>nikita.ahuja40@gmail.com</p>
                                    </div>
                                    
                                </div>

                                

                            <div className="col-md-4 text-center animate-box">
                                <div className="desc">
                                    <h3>Phone <i className="icon-phone"/></h3>
                                    <p>+971-551383105</p>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}