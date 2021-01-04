import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Slider from "./Slider";
import Service from "./Service";
import Course from "./Course";
import About3 from "./About3";
import Topic from "./Topic";
import Team from "./Team";

const Home = () => {
  return (
    <React.Fragment>
      <Slider />
        <Service />
        <Course />
        <Topic />
        <About3 />
        <Team />
    </React.Fragment>
  );
};

export default Home;
