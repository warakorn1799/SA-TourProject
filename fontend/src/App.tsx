import React from 'react';
import logo from './logo.svg';
import './App.css';
import Taskbar from './components/TaskbarPayment';
import PaymentBody from './components/PaymentBody'
import PaymentLowBody from './components/PaymentLowBody'

function App() {
  return (
    <>
    <Taskbar />
    <PaymentBody />
    <PaymentLowBody />
    </>
  );
}

export default App;
