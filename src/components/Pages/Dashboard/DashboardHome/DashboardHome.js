import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div className="">
            <div className="dashboard-header p-3 d-flex justify-content-between">
                <div>
                    <h4>DashBoard</h4>
                </div>
                <div>
                <h6 className="text-dark">{user?.displayName}</h6>
                </div>
            </div>
            <div className="dashboard-main p-3" style={{backgroundColor:'#F4F7FC',height: '74vh'}}>
                Welcome
            </div>
        </div>
    );
};

export default DashboardHome;