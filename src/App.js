import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './components/Bootstrap/bootstrap.min.css';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import AddService from './components/Pages/Dashboard/AddService/AddService';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './components/Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './components/Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import Orders from './components/Pages/Dashboard/Orders/Orders';
import Payment from './components/Pages/Dashboard/Payment/Payment';
import Review from './components/Pages/Dashboard/Review/Review';
import ServiceList from './components/Pages/Dashboard/ServiceList/ServiceList';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import Purchase from './components/Pages/Purchase/Purchase';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/purchase/:id" element={<PrivateRoute><Purchase /> </PrivateRoute>}></Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /> </PrivateRoute>}>
            
            <Route
                exact
                path="/dashboard"
                element={<DashboardHome></DashboardHome>}
              ></Route>
            <Route
                path="/dashboard/myOrder"
                element={<Orders></Orders>}
              ></Route>
            <Route
                path="/dashboard/makeAdmin"
                element={<MakeAdmin></MakeAdmin>}
              ></Route>
            <Route
                path="/dashboard/serviceList"
                element={<ServiceList></ServiceList>}
              ></Route>
            <Route
                path="/dashboard/allOrders"
                element={<ManageAllOrders></ManageAllOrders>}
              ></Route>
            <Route
                path="/dashboard/addService"
                element={<AddService></AddService>}
              ></Route>
            <Route
                path="/dashboard/review"
                element={<Review></Review>}
              ></Route>
            <Route
                path="/dashboard/payment/:id"
                element={<Payment></Payment>}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
