import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `http://localhost:5000/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal("Deleted Successfully", "success");
            const remainingServices= services.filter(
              (service) => service._id !== id
            );
            setServices(remainingServices);
          }
        });
    }
  };
  return (
    <div className="">
      <div className="dashboard-header p-3 d-flex justify-content-between">
        <div>
          <h4>Payment</h4>
        </div>
        <div>
          <h6 className="text-dark">{user?.displayName}</h6>
        </div>
      </div>
      <div
        className="dashboard-main p-3"
        style={{ backgroundColor: "#F4F7FC", height: "74vh" }}
      >
        <div className="order-single bg-white">
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Price</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  <td>{user?.displayName}</td>
                  <td>{user?.email}</td>
                  <td>{service.title}</td>
                  <td>{service.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
