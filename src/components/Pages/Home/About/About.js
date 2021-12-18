import React from 'react';
import ProgressBar from "react-animated-progress-bar";
import left from '../../../images/About-Us-Single-Image-2.jpg';
import './About.css'

const About = () => {
    return (
        <div className="about pt-5" style={{backgroundColor:'#E9EDEE'}}>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={left} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6">
                    <h3>EVERYTHING FOR YOU</h3>
                    <p>We’re not only here to fix your device but also make sure you are informed and comfortable with the whole process. We’ll keep you updated and you feel comfortable with our services.</p>
                <div className="progress-about">
                    <p className="mb-0">SERVICE</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="85"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                <div className="progress-about">
                    <p className="mb-0">SKILLS</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="90"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                <div className="progress-about">
                    <p className="mb-0">RELIABILITY</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="80"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                <div className="progress-about">
                    <p className="mb-0">REPAIR</p>
                  <ProgressBar
                    width="400px"
                    height="15px"
                    rect
                    fontColor="gray"
                    percentage="60"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="transparent"
                    trackBorderColor="grey"
                  />
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;