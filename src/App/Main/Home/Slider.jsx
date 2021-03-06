import React from "react";

const Slider = () => {
  return (
    <React.Fragment>
      <section className="slider-area ">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInLeft" data-delay="0.2s">
                      Online learning
                      <br /> platform
                    </h1>
                    <p data-animation="fadeInLeft" data-delay="0.4s">
                      Build skills with courses, certificates, and degrees
                      online from world-class universities and companies
                    </p>
                    <a
                      href="#"
                      className="btn hero-btn"
                      data-animation="fadeInLeft"
                      data-delay="0.7s"
                    >
                      Join for Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Slider;
