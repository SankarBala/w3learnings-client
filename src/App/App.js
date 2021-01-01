import React from 'react';
import "./dependencies";
import "./config";
import './App.css';

import Loader from "./../assets/img/logo/loader.png";


import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
              <img src={Loader} />
            </div>
          </div>
        </div>
      </div>

      <Header />
      <Main />
      <Footer />

      <div id="back-top">
        <a title="Go to Top" href="#">
          <i className="fas fa-level-up-alt" />
        </a>
      </div>

    </React.Fragment>

  );
}

export default App;
