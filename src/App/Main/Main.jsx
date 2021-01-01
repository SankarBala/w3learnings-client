import React from "react";

import Icon1 from "./../../assets/img/icon/icon1.svg";
import Icon2 from "./../../assets/img/icon/icon2.svg";
import Icon3 from "./../../assets/img/icon/icon3.svg";
import Featured1 from "./../../assets/img/gallery/featured1.png";
import Featured2 from "./../../assets/img/gallery/featured2.png";
import Featured3 from "./../../assets/img/gallery/featured3.png";
import About from "./../../assets/img/icon/about.svg";
import About2 from "./../../assets/img/gallery/about2.png";
import About3 from "./../../assets/img/gallery/about3.png";
import Team1 from "./../../assets/img/gallery/team1.png";
import Team2 from "./../../assets/img/gallery/team2.png";
import Team3 from "./../../assets/img/gallery/team3.png";
import Team4 from "./../../assets/img/gallery/team4.png";
import Topic1 from "./../../assets/img/gallery/topic1.webp";
import Topic2 from "./../../assets/img/gallery/topic2.webp";
import Topic3 from "./../../assets/img/gallery/topic3.webp";
import Topic4 from "./../../assets/img/gallery/topic4.webp";
import Topic5 from "./../../assets/img/gallery/topic5.webp";
import Topic6 from "./../../assets/img/gallery/topic6.webp";
import Topic7 from "./../../assets/img/gallery/topic7.webp";
import Topic8 from "./../../assets/img/gallery/topic8.webp";
import Right_icon from "./../../assets/img/icon/right-icon.svg";



const Main = () => {
  return (
    <React.Fragment>
      <main>
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
                    <a
                      href="#"
                      className="border-btn border-btn2"
                      tabIndex={-1}
                    >
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="about-area1 fix pt-10">
          <div className="support-wrapper align-items-center">
            <div className="left-content1">
              <div className="about-icon">
                <img src={About} />
              </div>
              <div className="section-tittle section-tittle2 mb-55">
                <div className="front-text">
                  <h2 className>Learn new skills online with top educators</h2>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
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
            <div className="right-content1">
              <div className="right-img">
                <img src={Topic1} />
                <div className="video-icon">
                  <a
                    className="popup-video btn-icon"
                    href="https://www.youtube.com/watch?v=up68UAfH0d0"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="topic-area section-padding40">
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
                    <img src={Topic1} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic2} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic3} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic4} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic5} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic6} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic7} />
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src={Topic8} />
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
        <section className="about-area3 fix">
          <div className="support-wrapper align-items-center">
            <div className="right-content3">
              <div className="right-img">
                <img src={About3} />
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

        <section className="team-area section-padding40 fix">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-tittle text-center mb-55">
                  <h2>Community experts</h2>
                </div>
              </div>
            </div>
            <div className="team-active slick-initialized slick-slider">
              <button
                type="button"
                className="slick-prev slick-arrow"
                style={{ display: "block" }}
              >
                <i className="ti-angle-left" />
              </button>
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 4102,
                    transform: "translate3d(-1465px, 0px, 0px)",
                  }}
                >
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={-4}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team2} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Uttom
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={-3}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team3} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Shakil
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={-2}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team4} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Arafat
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={-1}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team3} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. saiful
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide"
                    data-slick-index={0}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team1} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Urela
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-current slick-active"
                    data-slick-index={1}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team2} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={0}>
                          Mr. Uttom
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-active"
                    data-slick-index={2}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team3} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={0}>
                          Mr. Shakil
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-active"
                    data-slick-index={3}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team4} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={0}>
                          Mr. Arafat
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-active"
                    data-slick-index={4}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team3} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={0}>
                          Mr. saiful
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={5}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team1} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Urela
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={6}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team2} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Uttom
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={7}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team3} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Shakil
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={8}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team4} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. Arafat
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                  <div
                    className="single-cat text-center slick-slide slick-cloned"
                    data-slick-index={9}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 263 }}
                  >
                    <div className="cat-icon">
                      <img src={Team3} />
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html" tabIndex={-1}>
                          Mr. saiful
                        </a>
                      </h5>
                      <p>The automated process all your website tasks.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="slick-next slick-arrow"
                style={{ display: "block" }}
              >
                <i className="ti-angle-right" />
              </button>
            </div>
          </div>
        </section>

        <section className="about-area2 fix pb-padding">
          <div className="support-wrapper align-items-center">
            <div className="right-content2">
              <div className="right-img">
                <img src={About2} />
              </div>
            </div>
            <div className="left-content2">
              <div className="section-tittle section-tittle2 mb-20">
                <div className="front-text">
                  <h2 className>
                    Take the next step toward your personal and professional
                    goals with us.
                  </h2>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                  <a href="#" className="btn">
                    Join now for Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
