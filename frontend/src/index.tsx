import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Booking from './pages/booking/Booking';
import Register from './pages/Home/component/PageRegister/Register';
import Detail1 from './pages/Detail/Detail1/Detail1';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom";
import Paymentdetail from './pages/paymentDetail/index';
import Paymenthistory from './pages/paymentHistory/index';
import Payment from './App';
import PaymentAdmin from './pages/paymentAdmin/App'
import Review from './pages/Reviews/Review';
import SucessReview from './pages/Reviews/SucessReview'; 
import Contact from './pages/ContactUs/Contact';
import AdminLogin from './pages/AdminLogin/App'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail",
    element: <Paymentdetail />
  },
  {
    path: "/payment-history",
    element: <Paymenthistory />
  },
  {
    path: "/payment",
    element: <Payment />
  },  
  {
    path: "/payment-Admin",
    element: <PaymentAdmin />
  },
  {
    path: "/Booking",
    element: <Booking />
  },
  {
    path: "/Register",
    element: <Register />
  },  
  {
    path: "/Detail_page1",
    element: <Detail1 />
  },
  {
    path: "/Contact",
    element:<Contact/>
  },
  {
    path: "/Review",
    element:<Review/>
  },
  {
    path: "/SucessReview",
    element:<SucessReview/>
  },
  {
    path: "/Admin/Login",
    element:<AdminLogin/>
  }
  
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
