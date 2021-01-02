import React from "react";

import About_pic from "./../../assets/img/icon/about.svg";
import Topic1 from "./../../assets/img/gallery/topic1.webp";
import Right_icon from "./../../assets/img/icon/right-icon.svg";

const About1 = () => {
    return (
        <React.Fragment>
            <section className="about-area1 fix pt-10">
                <div className="support-wrapper align-items-center">
                    <div className="left-content1">
                        <div className="about-icon">
                            <img src={About_pic}/>
                        </div>
                        <div className="section-tittle section-tittle2 mb-55">
                            <div className="front-text">
                                <h2 className>Learn new skills online with top educators</h2>
                                <p>
                                    The automated process all your website tasks. Discover tools
                                    and techniques to engage effectively with vulnerable children
                                    and young people.
                                </p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src={Right_icon}/>
                            </div>
                            <div className="features-caption">
                                <p>
                                    Techniques to engage effectively with vulnerable children and
                                    young people.
                                </p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src={Right_icon}/>
                            </div>
                            <div className="features-caption">
                                <p>
                                    Join millions of people from around the world learning
                                    together.
                                </p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src={Right_icon}/>
                            </div>
                            <div className="features-caption">
                                <p>
                                    Join millions of people from around the world learning
                                    together. Online learning is as easy and natural.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content1">
                        <div className="right-img">
                            <img src={Topic1}/>
                            <div className="video-icon">
                                <a
                                    className="popup-video btn-icon"
                                    href="https://www.youtube.com/watch?v=up68UAfH0d0"
                                >
                                    <i className="fas fa-play"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About1;
