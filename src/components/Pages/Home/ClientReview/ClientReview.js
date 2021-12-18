import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import right from "../../../images/client-image.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ClientReview.css';

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/review")
      .then((res) => setReviews(res.data));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="client-review pt-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-5">
              Our Clients <br />
              <span className="theme-color">Opinion About Us</span>
            </h2>
            <Slider {...settings}>
              {reviews?.map((pd) => (
                <div className="text-area">
                  <p style={{fontSize:'20px'}}>{pd.description}</p>
                  <p>
                    <Rating
                      initialRating={pd.rating}
                      emptySymbol={<FaRegStar />}
                      fullSymbol={<FaStar />}
                      readonly
                    ></Rating>
                  </p>
                  <h5>{pd.name}</h5>
                  <p className="font-weight-bold">{pd.companyDesig}</p>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-6 ">
            <img src={right} style={{height:'400px'}} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
