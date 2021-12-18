import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../images/logo.png";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (

    <div className="register-area py-5 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
          <img style={{width: "120px"}} className="mb-4" src={logo} alt="" />
            <div className="register border p-3 rounded">
              
              <h4 className="py-3 theme-color">Log in Your Account</h4>
              
                <form onSubmit={handleLoginSubmit}>
                  
                  <input
                    className="form-control mb-4"
                    placeholder="Your Email"
                    name="email"
                    type="email"
                    onBlur={handleOnChange}
                  />
                  <input
                    className="form-control mb-4"
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnChange}
                  />

                  <button
                    type="submit"
                    className="btn theme-bg text-white mb-3"
                  >
                    Log in
                  </button>
                  <br />
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                  New User? Please Register
                  </NavLink>
                
              {isLoading && <Spinner animation="border" />}
              {user?.email && swal("Login successfully!", "success")}
              {authError &&
                swal("Something went wrong!", `${authError}`, "error")}
                </form>
                <p>-----------OR-------------</p>
                    <button onClick={handleGoogleSignIn} className="btn theme-bg text-white mb-3"> Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;