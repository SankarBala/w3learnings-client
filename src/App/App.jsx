import React from "react";
import { Route, Switch } from "react-router-dom";

import "./dependencies";
import "./config";
import "./App.css";
import ScrollToTop from "./widgets/ScrollToTop";
import Loader from "./widgets/Loader";
import Header from "./Header/Header";
import Home from "./Main/Home/Home";
import Footer from "./Footer/Footer";
import Courses from "./Main/Courses/Courses";
import Contact from "./Main/Contact/Contact";

function App(props) {
  return (
    <React.Fragment>
      <Loader />
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;
