import React, { useState } from "react";

import Loader_img from "./../../assets/img/logo/loader.png";

const Loader = () => {
  const [preloader, setPreloader] = useState(true);

  window.addEventListener("load", () => {
    setTimeout(setPreloader(false), 450);
  });

  if (preloader) {
    return (
      <React.Fragment>
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle" />
              <div className="preloader-img pere-text">
                <img src={Loader_img} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export default Loader;
