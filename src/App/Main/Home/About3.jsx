import React from "react";

import About3_pic from "./../../../assets/img/gallery/about3.png";
import Right_icon from "./../../../assets/img/icon/right-icon.svg";



const About3 = () => {
  return (
    <React.Fragment>

   <section className="about-area3 fix">
<div className="support-wrapper align-items-center">
  <div className="right-content3">
    <div className="right-img">
      <img src={About3_pic} />
    </div>
  </div>
  <div className="left-content3">
    <div className="section-tittle section-tittle2 mb-20">
      <div className="front-text">
        <h2 className>Learner outcomes on courses you will take</h2>
      </div>
    </div>
    <div className="single-features">
      <div className="features-icon">
        <img src={Right_icon} />
      </div>
      <div className="features-caption">
        <p>
          Techniques to engage effectively with vulnerable children
          and young people.
        </p>
      </div>
    </div>
    <div className="single-features">
      <div className="features-icon">
        <img src={Right_icon} />
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
        <img src={Right_icon} />
      </div>
      <div className="features-caption">
        <p>
          Join millions of people from around the world learning
          together. Online learning is as easy and natural.
        </p>
      </div>
    </div>
  </div>
</div>
</section>
</React.Fragment>
  );
};

export default About3;
