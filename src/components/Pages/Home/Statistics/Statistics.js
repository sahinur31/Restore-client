import React from "react";
import CountUp from "react-countup";
import './Statistics.css';
const Statistics = () => {
  return (
    <div>
      <div className="counter-area py-5 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center py-5">
              <h2>Our Statistics</h2>
              <p>
                We’re experienced and award winning repair company. We’ve
                successfully fixed thousands of computer device over the last
                couple of years with our customer satisfaction.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="single-counter">
                <h3 className="display-4 fw-bold">
                  <CountUp start={0} end={100} duration={3.75} />
                </h3>
                <h5>Current <span className="theme-color">Fixings</span></h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-counter">
                <h3 className="display-4 fw-bold">
                  <CountUp start={0} end={6674} duration={3.75} />
                </h3>
                <h5>Happy <span className="theme-color">Clients</span></h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-counter">
                <h3 className="display-4 fw-bold">
                  <CountUp start={0} end={22} duration={3.75} />
                </h3>
                <h5>Years  <span className="theme-color">Experience</span></h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-counter">
                <h3 className="display-4 fw-bold">
                  <CountUp start={0} end={5760} duration={3.75} />
                </h3>
                <h5>Devices <span className="theme-color">Fixings</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
