import React from "react";

import Logo_img from "./../../assets/img/logo/logo.png";

const Logo = () => {
  return (
    <React.Fragment>
      <div className="col-xl-2 col-lg-2">
        <div className="logo">
          <a href="index.html">
            <img src={Logo_img} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Logo;
