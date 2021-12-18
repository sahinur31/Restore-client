import React from "react";
import img1 from "../../../images/slide-1.jpg";
import img2 from "../../../images/slide-2.jpg";
import img3 from "../../../images/slide-3.jpg";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="single-slide-item">
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <div className="row">
            <div className="col-md-8 col">
              <h3>First Repair Service</h3>
              <p>Just send your valuable PC, Mobile, Gaming Device and SmartPhone. We take care of your device. We will happy to serve our best to you,just keep faith on us </p>
              <button className="btn bg-white theme-color px-4 py-2 me-3">Get Started Now</button>
              <button className="btn theme-bg text-white px-4 py-2">Learn More</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="single-slide-item">
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <div className="row">
            <div className="col-md-8 col">
              <h3>Computer Repair</h3>
              <p>Just send your valuable PC, Mobile, Gaming Device and SmartPhone. We take care of your device. We will happy to serve our best to you,just keep faith on us </p>
              <button className="btn bg-white theme-color px-4 py-2 me-3">Get Started Now</button>
              <button className="btn theme-bg text-white px-4 py-2">Learn More</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="single-slide-item">
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <div className="row">
            <div className="col-md-8 col">
              <h3>Mobile Repair</h3>
              <p>Just send your valuable PC, Mobile, Gaming Device and SmartPhone. We take care of your device. We will happy to serve our best to you,just keep faith on us </p>
              <button className="btn bg-white theme-color px-4 py-2 me-3">Get Started Now</button>
              <button className="btn theme-bg text-white px-4 py-2">Learn More</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
