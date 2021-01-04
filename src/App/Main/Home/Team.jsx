import React from "react";

import Team1 from "./../../../assets/img/gallery/team1.png";
import Team2 from "./../../../assets/img/gallery/team2.png";
import Team3 from "./../../../assets/img/gallery/team3.png";
import Team4 from "./../../../assets/img/gallery/team4.png";

const Team = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Team;
