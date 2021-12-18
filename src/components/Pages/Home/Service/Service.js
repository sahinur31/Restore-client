import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = ({data}) => {
    const {_id,title,price,description,image} = data;
    return (
        
            <div className="col-lg-3">
            <div className="card mb-3 single-service p-3">
                <img className="" style={{width: '100px',height:'100px'}} src={`data:image/*;base64,${image}`} alt={title} />
                <h5 className="my-3">{title}</h5>
                <h6>Price: $ {price}</h6>
                <p className="text-justify">{description.slice(0,90)}</p>
                <div className="d-flex justify-content-end">
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn text-center text-white theme-bg"><FaAngleRight /></button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default Service;