import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const AddService = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = React.useState(null);

  const onSubmit = (data) => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("image", image); //post to backend
    axios
      .post("http://localhost:5000/services", formData)
      .then((res) => {
        if (res.data.insertedId) {
          swal("Good job!", "Service Added", "success");
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
          <h4>Add Service</h4>
        </div>
        <div>
          <h6 className="text-dark">{user?.displayName}</h6>
        </div>
      </div>
      <div
        className="dashboard-main p-3"
        style={{ backgroundColor: "#F4F7FC", height: "74vh" }}
      >
        <h4 className="py-3">Please Add A Service Here</h4>
        <div className="single-add-product">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <label className="mb-2">Service Title</label>
                <input
                  className="form-control mb-3"
                  {...register("title")}
                  placeholder="Title"
                />
                <label className="mb-2">Service Description</label>
                <textarea
                  className="form-control mb-3"
                  {...register("description")}
                  placeholder="Description"
                />
              </div>
              <div className="col">
                <label className="mb-2">Service Price</label>
                <input
                  className="form-control mb-3"
                  type="number"
                  {...register("price")}
                  placeholder="price"
                />
                <label className="mb-2">Icon</label>
                <input
                  id="image"
                  accept="image/*"
                  type="file"
                  className="form-control mb-2"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <input
              className="btn theme-bg text-white"
              type="submit"
              value="Add Service"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
