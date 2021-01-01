import React from "react";

import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="header-area header-transparent">
          <div className="main-header ">
            <div className="header-bottom  header-sticky sticky-bar">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <Logo />
                  <Nav />
                 
                 
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none">
                      <div className="slicknav_menu">
                        <a
                          href="#"
                          aria-haspopup="true"
                          role="button"
                          tabIndex={0}
                          className="slicknav_btn slicknav_collapsed"
                          style={{ outline: "none" }}
                        >
                          <span className="slicknav_icon">
                            <span className="slicknav_icon-bar" />
                            <span className="slicknav_icon-bar" />
                            <span className="slicknav_icon-bar" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
