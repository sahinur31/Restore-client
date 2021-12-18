import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Purchase = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth() || {};
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id,product])
    const onSubmit = data => {
        let newOrder = { ...product ,...data};
        newOrder['OrderStatus'] = 'pending'; 
        axios.post('http://localhost:5000/placeorder', newOrder)
        .then(res => {
            if (res.data) {
                swal("Good job!", "Order Added", "success");
            }
            navigate('/dashboard/myOrder')
            reset();
        }).catch((error) => {
            swal("Something went wrong!", `${error.message}`, "error")
        })
};
    return (
        <>
        <Header></Header>
        <div className="purchase-area py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center mb-5">
                            <h2>Your Orders Details</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="purchase-single">
                            <img className="img-fluid mb-3" src={`data:image/*;base64,${product.image}`} alt="" />
                            <h2 className="text-capitalize">{product.title}</h2>
                            <h5><b>Price:</b> {product.price}</h5>
                            <p className="text-justify"><b>Description:</b> {product.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="place-single border rounded p-4">
                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                <input className="form-control p-3 mb-3" defaultValue={user.displayName} {...register("name")} />
                                <input className="form-control p-3 mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                
                                <textarea {...register("address" , { required: true })} type="text" className="form-control p-3 mb-3" placeholder="Your Address" cols="30" rows="5"></textarea>
                                <input className="form-control p-3 mb-3" placeholder="City" defaultValue="" {...register("city")} />
                                <input className="form-control p-3 mb-3" placeholder="phone number" defaultValue="" {...register("phone")} />
                                <input className="btn theme-bg text-white" type="submit" value="Purchase Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Purchase;