import React from "react";

import Featured2 from "./../../../assets/img/gallery/featured2.png";
import Topic1 from "./../../../assets/img/gallery/topic1.webp";


const Courses = () => {
  return (
    <React.Fragment>
      <section className="slider-area slider-area2">
        <div className="slider-active slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: 1583 }}>
              <div
                className="single-slider slider-height2 slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                tabIndex={0}
                style={{
                  width: 1583,
                  position: "relative",
                  left: 0,
                  top: 0,
                  zIndex: 999,
                  opacity: 1,
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-11 col-md-12">
                      <div className="hero__caption hero__caption2">
                        <h1
                          data-animation="bounceIn"
                          data-delay="0.2s"
                          className
                          style={{ animationDelay: "0.2s" }}
                        >
                          Our courses
                        </h1>
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="index.html" tabIndex={0}>
                                Home
                              </a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#" tabIndex={0}>
                                Services
                              </a>
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="courses-area section-padding40 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Our featured courses</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="properties properties2 mb-30">
                <div className="properties__card">
                  <div className="properties__img overlay1">
                    <a href="#">
                      <img src={Featured2} />
                    </a>
                  </div>
                  <div className="properties__caption">
                    <p>User Experience</p>
                    <h3>
                      <a href="#">Fundamental of UX for Application design</a>
                    </h3>
                    <p>
                      The automated process all your website tasks. Discover
                      tools and techniques to engage effectively with vulnerable
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
                    <a href="#" className="border-btn border-btn2">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mt-40">
                <a href="#" className="border-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topic-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Explore top subjects</h2>
              </div>
            </div>
          </div>
          <div className="row">
      
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src={Topic1}/>
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">Programing</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
        
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-tittle text-center mt-20">
                <a href="courses.html" className="border-btn">
                  View More Subjects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-area services-area2 section-padding40">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <img src="assets/img/icon/icon1.svg" alt />
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
                  <img src="assets/img/icon/icon2.svg" alt />
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
                  <img src="assets/img/icon/icon3.svg" alt />
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

export default Courses;
