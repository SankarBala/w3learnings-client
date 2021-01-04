import React from "react";

import Featured2 from "./../../../assets/img/gallery/featured2.png";

const Course = () => {
  return (
    <React.Fragment>
      <div className="courses-area section-padding40 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Our featured courses</h2>
              </div>
            </div>
          </div>

          <div className="courses-actives slick-initialized slick-slider">
            <div
              className="properties pb-20 slick-slide slick-cloned"
              data-slick-index={-3}
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 360 }}
            >
              <div className="properties__card">
                <div className="properties__img overlay1">
                  <a href="#" tabIndex={-1}>
                    <img src={Featured2} />
                  </a>
                </div>
                <div className="properties__caption">
                  <p>User Experience</p>
                  <h3>
                    <a href="#" tabIndex={-1}>
                      Fundamental of UX for Application design
                    </a>
                  </h3>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                  <div className="properties__footer d-flex justify-content-between align-items-center">
                    <div className="restaurant-name">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half" />
                      </div>
                      <p>
                        <span>(4.5)</span> based on 120
                      </p>
                    </div>
                    <div className="price">
                      <span>$135</span>
                    </div>
                  </div>
                  <a href="#" className="border-btn border-btn2" tabIndex={-1}>
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Course;
