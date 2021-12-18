import React, { useState } from "react";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.inserted) {
          setSuccess(true);
        }
        reset();
      });
    // console.log(data);
  };
  return (
    <div>
      <h1 className="p-2">Make admin</h1>
      <div
        className="p-5"
        style={{ backgroundColor: "#F4F7FC", minHeight: "90vh" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Please give an email Address</h4>
          <div className="d-flex">
            <input
              style={{ width: "35%" }}
              className="form-control me-3"
              name="email"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <input
              className="submit-btn btn theme-bg text-white"
              type="submit"
              value="Make as Admin"
            />
          </div>
        </form>
        {success && (
          <span className="text-primary">Make admin successfully</span>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
