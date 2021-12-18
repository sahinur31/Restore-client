import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)));
    }, [])
    return (
        <div className="latest-product py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="section-title mb-5 py-3">
                            
                            <h2>Our Repair  <span className="theme-color">Services</span></h2>
                            <p>Any kinds of digital device problem you need fixed. We can help! Check out our digital device repair services to find more information of what exactly we provide and if it suites your needs</p>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        services.map(service => <Service
                        key={service._id}
                        data={service}
                        ></Service>)
                    }
                    {/* <Link to="/explore">
                        <button className="btn mt-3 text-center text-white theme-bg">Explore More</button>
                    </Link>  */}
                    </div>

                }
            </div>
        </div>
    );
};

export default Services;