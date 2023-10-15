import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Home2 from './pages/Home2/Home'
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
    path: "/Home",
    element: <Home2 />
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
    path: "/Review",
    element:<Review/>
  },
  {
    path: "/SucessReview",
    element:<SucessReview/>
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
