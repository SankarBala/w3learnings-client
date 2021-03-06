import React from "react";

import About2_pic from "./../../../assets/img/gallery/about2.png";

const About2 = () => {
  return (
    <React.Fragment>
      <section className="about-area2 fix pb-padding">
        <div className="support-wrapper align-items-center">
          <div className="right-content2">
            <div className="right-img">
              <img src={About2_pic} />
            </div>
          </div>
          <div className="left-content2">
            <div className="section-tittle section-tittle2 mb-20">
              <div className="front-text">
                <h2 className>
                  Take the next step toward your personal and professional goals
                  with us.
                </h2>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
                <a href="#" className="btn">
                  Join now for Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About2;
