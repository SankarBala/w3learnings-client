import React from "react";

import Icon1 from "./../../../assets/img/icon/icon1.svg";
import Icon2 from "./../../../assets/img/icon/icon2.svg";
import Icon3 from "./../../../assets/img/icon/icon3.svg";

const Service = () => {
  return (
    <React.Fragment>
      <div className="services-area">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <img src={Icon1} />
                </div>
                <div className="features-caption">
                  <h3>60+ UX courses</h3>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <img src={Icon2} />
                </div>
                <div className="features-caption">
                  <h3>Expert instructors</h3>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <img src={Icon3} />
                </div>
                <div className="features-caption">
                  <h3>Life time access</h3>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;
