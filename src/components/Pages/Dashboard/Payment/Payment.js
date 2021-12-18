
import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51JzhroJVQE5wvhmbNgkajVhQwVKAu7XV2VAYsCvr505TxZfNZaUqxAiJAaA8inLj6PADzSW5CtWOVsFu3ewYJrkQ00sy1aJMpp');



const Payment = () => {
  const { user } = useAuth();
  const {id} = useParams();
  const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id])
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
        <div className="single-add-product text-center">
        <h4>Please Pay for: {user?.displayName} for {order.title}</h4>
            <h4>Pay: ${order.price}</h4>
            {order?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    order={order}
                />
            </Elements>}
        </div>
      </div>
    </div>
  );
};

export default Payment;
