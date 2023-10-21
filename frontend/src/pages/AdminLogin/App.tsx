import React, { Component, ChangeEvent, useState } from 'react';
import line1 from './assets/Line22.png'
import line2 from './assets/Line23.png'
import logo from './assets/logo.png'
import './App.css';
import { message } from 'antd'
import { GetAdminByEmail } from '../../services/http/adminService';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const [Email, setEmail] = useState(''); // สร้าง state เพื่อเก็บข้อมูลอีเมล
  const [password, setPassword] = useState(''); // สร้าง state เพื่อเก็บข้อมูลพาสเวิร์ด
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
      if (!value) {
        setEmailError('กรุณาป้อนอีเมล');
      } else {
        setEmailError('');
      }
    } else if (name === 'password') {
      setPassword(value);
      if (!value) {
        setPasswordError('กรุณาป้อนพาสเวิร์ด');
      } else {
        setPasswordError('');
      }
    }
  }
  const handleSubmit = async () => {
    if (!Email) {
      setEmailError('Input your email!!');
      messageApi.open({
        type: 'error',
        content: emailError,
      });
    }
    if (!password) {
      setPasswordError('Input your password');
      messageApi.open({
        type: 'error',
        content: passwordError,
      });
    }
    if (Email && password) {
      let res = await GetAdminByEmail(Email);
      if (res) {
        if (Email != res.Email || password != res.Password) {
          messageApi.open({
            type: 'error',
            content: 'Email or Password not correct!',
          });
        }
        else {
          messageApi.open({
            type: 'success',
            content: 'Login Success',
          });
          setTimeout(() => {
            navigate('/admin/dashboard');
          }, 1000);
        }
      }
    }
  }
  return (
    <div className="App">
      {contextHolder}
      <div className='line_index'>
        <div className='line1'> <img src={line1} /> </div>
        <div className='line2'> <img src={line2} /> </div>
      </div>
      <div className='border_page'>
        <div className='logo-style'> <img src={logo} />Admin Log in </div>
        <div className='inputform-style'>
          <input
            className='input-style'
            type="text"
            name="email"
            placeholder="Email"
            value={Email}
            onChange={handleChange}
          />
          <input
            className='input-style'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder="Password" />
          <button className='button-style' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
