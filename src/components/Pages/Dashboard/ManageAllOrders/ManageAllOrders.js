import React,  {useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isUpdated , setIsUpdated] = useState(false)
    useEffect(()=> {
        fetch('http://localhost:5000/orders/')
        .then(res => res.json())
        .then(data => {
            setIsUpdated(false)
            setOrders(data)
        })
    }, [isUpdated])
    
    // functionality for  update status
    const handleUpdateStatus = (id , orders) => {
        console.log(id , orders)
        const updatedOrders = {
            ...orders,
            OrderStatus: 'Shipped'
        }
        console.log(updatedOrders)
        fetch(`http://localhost:5000/updateStatusOrders/${id}` , {
            method : "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedOrders)
        })
        .then(res => res.json())
        .then(data =>{
            setIsUpdated(true)
        })
    }

    return (
        <div className="p-2">
            <h2>Manage All Orders Product</h2>
            <div className="p-2" style={{backgroundColor: '#F4F7FC',minHeight:'90vh'}}>
                <h4 className="py-3">Please Manage All Orders Here</h4>
                <div className="order-single">
                        <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    orders.map(order => <tr key={order._id}>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.price}</td>
                                            <td>{order.OrderStatus}</td>
                                            <td>
                                                {/* <Link to={`/update/${order._id}`}><button className="btn btn-primary">Update</button></Link> */}
                                                <button onClick={() => handleUpdateStatus(order._id, order)} className="btn btn-primary">Update</button>
                                                {/* to={`/products/update/${product._id}`} */}
                                                
                                               
                                            </td>
                                        </tr>
                                    )} 
                                </tbody>
                            </Table>
                        </div>
            </div> 
        </div>
    );
};

export default ManageAllOrders;