import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user.email]);

  const handleCancel = (id) => {
    // const proceed = window.confirm('Are you sure you want to delete');
    swal({
      title: "Are you sure?",
      text: "Are you sure to delete this booking ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5000/myOrders/${id}`).then((res) => {
          console.log(res);
          if (res.data) {
            swal("Poof! Order has deleted", {
              icon: "success",
            });
            const remainingProducts = myOrder.filter(
              (order) => order._id !== id
            );
            setMyOrder(remainingProducts);
          }
        });
      } else {
        swal("Order hasn't deleted.You booking is stay here!!");
      }
    });
  };
  return (
    <div className="">
      <div className="dashboard-header p-3 d-flex justify-content-between">
        <div>
          <h4>Order</h4>
        </div>
        <div>
          <h6 className="text-dark">{user?.displayName}</h6>
        </div>
      </div>
      <div
        className="dashboard-main p-3"
        style={{ backgroundColor: "#F4F7FC", height: "74vh" }}
      >
        <div className="row">
          {myOrder.map((order) => (
            <div key={order._id} className="col-md-4 mb-3">
              <div className="bg-white p-4 rounded">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <img
                      className=""
                      style={{ width: "50px" }}
                      src={`data:image/*;base64,${order.image}`}
                      alt=""
                    />
                  </div>
                  <div>
                    {order.status === "pending" ? (
                      <p className="bg-danger p-2 px-3 rounded text-white">
                        {order.OrderStatus}
                      </p>
                    ) : (
                      <p className="bg-success p-2 px-3 rounded text-white">
                        {order.OrderStatus}
                      </p>
                    )}
                  </div>
                </div>
                <h5>{order.title}</h5>
                <p>{order.description}</p>
                <button
                  onClick={() => handleCancel(order._id)}
                  className="btn btn-danger ms-2"
                >
                  Cancel
                </button>
                {order.payment ?
                <button className="btn btn-primary ms-2">Paid</button> : 
                <Link to={`/dashboard/payment/${order._id}`}>
                  <button className="btn btn-primary ms-2">Pay</button>
                </Link>

                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
