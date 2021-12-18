import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <>
      <div className="register-area py-5 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="register border p-3 rounded">
                <h2 className="py-3 theme-color">Create an Account</h2>
                {!isLoading && (
                  <form onSubmit={handleLoginSubmit}>
                    <input
                      className="form-control mb-4"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      onBlur={handleOnBlur}
                    />
                    <input
                      className="form-control mb-4"
                      placeholder="Your Email"
                      name="email"
                      type="email"
                      onBlur={handleOnBlur}
                    />
                    <input
                      className="form-control mb-4"
                      placeholder="Your Password"
                      type="password"
                      name="password"
                      onBlur={handleOnBlur}
                    />
                    <input
                      className="form-control mb-4"
                      placeholder="ReType Your Password"
                      type="password"
                      name="password2"
                      onBlur={handleOnBlur}
                    />

                    <button
                      type="submit"
                      className="btn theme-bg text-white mb-3"
                    >
                      Create an Account
                    </button>
                    <br />
                    <NavLink style={{ textDecoration: "none" }} to="/login">
                      Already Registered? Please Login
                    </NavLink>
                  </form>
                )}
                {isLoading && <Spinner animation="border" />}
                {user?.email && swal("User Created successfully!", "success")}
                {authError &&
                  swal("Something went wrong!", `${authError}`, "error")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
