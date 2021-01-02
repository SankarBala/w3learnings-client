import React from "react";

import Slider from "./Slider";
import Service from "./Service";
import Course from "./Course";
import About3 from "./About3";
import Topic from "./Topic";
import Team from "./Team";

const Main = () => {
    return (
        <React.Fragment>
            <main>
                <Slider/>
                <Service/>
                <Course/>
                <Topic/>
                <About3/>
                <Team/>
            </main>
        </React.Fragment>
    );
};

export default Main;
