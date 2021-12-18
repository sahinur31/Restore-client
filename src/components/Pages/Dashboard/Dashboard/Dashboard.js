import {
  FaHome,
  FaUsers,
  FaCreditCard,
  FaStarHalfAlt,
  FaShoppingBasket,
  FaPlus,
  FaShoppingCart,
  FaUsersCog,
} from "react-icons/fa";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const logOutHandle = () => {
    logout();
    navigate("/home");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-4" style={{ minHeight: "100vh" }}>
            <div className="dashboard">
              <img
                src={logo}
                className="mb-4"
                style={{ width: "120px", padding: "5px" }}
                alt=""
              />

              <div className="normal-user">
                <ul className="nav flex-column">
                  <li className="nav-item p-3">
                    <Link to="/">
                      {" "}
                      <FaHome /> Home
                    </Link>
                  </li>
                  <li className="nav-item p-3">
                    <Link to="/dashboard">
                      <FaUsers /> Dashboard
                    </Link>
                  </li>
                </ul>
                {!isAdmin && (
                  <ul className="nav flex-column">
                    <li className="nav-item p-3">
                      <Link to={`/dashboard/myOrder`}>
                        <FaShoppingCart /> My Orders
                      </Link>
                    </li>
                    {/* <li className="nav-item p-3">
                      <Link to={`/dashboard/payment`}>
                        <FaCreditCard /> Pay
                      </Link>
                    </li> */}
                    <li className="nav-item p-3">
                      <Link to={`/dashboard/review`}>
                        <FaStarHalfAlt /> Review
                      </Link>
                    </li>
                    <li className="nav-item p-3">
                      <button
                        onClick={logOutHandle}
                        className="btn theme-bg text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
                {isAdmin && (
                  <ul className="nav flex-column">
                    <li className="nav-item p-3">
                      <Link to={`/dashboard/serviceList`}>
                        <FaShoppingBasket />
                        Service List
                      </Link>
                    </li>
                    <li className="nav-item p-3">
                      <Link to={`/dashboard/makeAdmin`}>
                        <FaUsersCog />
                        Make Admin
                      </Link>
                    </li>
                    <li className="nav-item p-3">
                      <Link to={`/dashboard/addService`}>
                        <FaPlus /> Add Service
                      </Link>
                    </li>
                    <li className="nav-item p-3">
                      <Link to={`/dashboard/allOrders`}>
                        <FaShoppingBasket /> Manage All Orders
                      </Link>
                    </li>
                    <li className="nav-item p-3">
                      <button
                        onClick={logOutHandle}
                        className="btn theme-bg text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}

                {/* <ul className="nav flex-column"></ul> */}
                {/* {!isAdmin && 
                                <ul className="nav flex-column">
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/myorder`}><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> My Orders</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/pay`}><FontAwesomeIcon icon={faCreditCard} ></FontAwesomeIcon> Pay</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/review`}><FontAwesomeIcon icon={faStarHalfAlt} ></FontAwesomeIcon> Review</Link>
                                    </li>
                                    <li className="nav-item border-top border-bottom p-3">
                                        <button onClick={logOutHandle} className="btn theme-bg text-white">Logout</button>
                                    </li>
                                    
                                </ul>
                            } */}
              </div>
              <div className="admin-dashboard">
                {/* {isAdmin && 
                                <ul className="nav flex-column border-top">
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/makeAdmin`}><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon> Make Admin</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/addProduct`}><FontAwesomeIcon icon={faPlusSquare} ></FontAwesomeIcon> Add A Product</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/manageProduct`}><FontAwesomeIcon icon={faShoppingBag} ></FontAwesomeIcon> Manage Product</Link>
                                    </li>
                                    <li className="nav-item border-top p-3">
                                        <Link to={`${url}/manageOrders`}><FontAwesomeIcon icon={faDolly} ></FontAwesomeIcon> Manage All Orders</Link>
                                    </li>
                                    <li className="nav-item border-top border-bottom p-3">
                                        <button onClick={logOutHandle} className="btn theme-bg text-white">Logout</button>
                                    </li>
                                </ul>
                            } */}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
