import React from "react";
import { BrowserRouter, NavLink, Link } from "react-router-dom";

const activeStyle = {
  color: "black",
};

const Nav = () => {
  return (
    <React.Fragment>
      <div className="col-xl-10 col-lg-10">
        <div className="menu-wrapper d-flex align-items-center justify-content-end">
          <div className="main-menu d-none d-lg-block">
          
              <nav>
                <ul id="navigation">
                  <li className="active">
                    <NavLink activeStyle={activeStyle} to="/" exact>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeStyle={activeStyle} to="/courses">
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeStyle={activeStyle} to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeStyle={activeStyle} to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="button-header margin-left">
                    <NavLink className="btn" to="/register">
                      Register
                    </NavLink>
                  </li>
                  <li className="button-header">
                    <Link className="btn btn3" to="/login">
                      Sign in
                    </Link>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
