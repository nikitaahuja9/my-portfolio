import React, {Component} from 'react';

export default class About extends Component {

  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <p><i><q>Don't work for recognition but do work worthy of recognition.</q> -Henry Jackson Brown, Jr</i></p>
                    <p>Hi there! I'm Nikita.<br/>
                      I'm a technology-driven enthusiast and a savvy programmer & am always seeking new opportunities to devise innovative solutions that positively impact peoples' lives.</p>
                    <p>Being a recent Computer Science Engineering graduate from BITS Pilani Dubai, I have worked on a handful of academic and personal projects, that showcase my interest in the field of development. I have 8 months of professional work experience and profound knowledge in all phases of the software development lifecycle - from business requirement analysis to design, implementation and testing.</p>
                    <p>In addition, I have strong communication, collaboration and team building skills, with proficiency in grasping new technical concepts and utilizing the same in a productive manner.</p>
                    <p>In my free time, I enjoy exercising, reading novels and watching documentaries. Reach out to me for networking and discussing new opportunities!</p>
                    </div>
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