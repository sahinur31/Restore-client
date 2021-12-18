
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = React.useState();

  const onSubmit = (data) => {
    console.log(data);
    data["rating"] = rating;
    axios
      .post("http://localhost:5000/review", data)
      .then((res) => {
        if (res.data.acknowledged) {
          swal("Good job!", "Review Added", "success");
        }
        reset();
      })
      .catch((error) => {
        swal("Something went wrong!", `${error.message}`, "error");
      });
  };
  return (
    <div className="">
      <div className="dashboard-header p-3 d-flex justify-content-between">
        <div>
          <h4>Review</h4>
        </div>
        <div>
          <h6 className="text-dark">{user?.displayName}</h6>
        </div>
      </div>
      <div
        className="dashboard-main p-3"
        style={{ backgroundColor: "#F4F7FC", height: "74vh" }}
      >
        <h4 className="py-3">Please Add a Review</h4>
        <div className="single-add-product">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control mb-3"
              defaultValue={user.displayName}
              {...register("name")}
              placeholder="Your Name"
            />
            <input
              className="form-control mb-3"
              type="text"
              {...register("companyDesig")}
              placeholder=" Designation, Company's Name"
            />
            <textarea
              className="form-control mb-3"
              style={{ height: "150px" }}
              {...register("description")}
              placeholder="Description"
            />
            <div className="flex flex-col mb-3">
              <p className="text-gray-600 font-primary">Give a rating*</p>
              <Rating
                onChange={(rate) => setRating(rate)}
                emptySymbol={ <FaRegStar /> }
                fullSymbol={<FaStar />}
              />
            </div>
            <input
              className="btn theme-bg text-white px-4"
              type="submit"
              value="Submit Review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
