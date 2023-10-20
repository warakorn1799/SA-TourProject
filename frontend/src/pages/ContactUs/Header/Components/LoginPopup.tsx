import React from 'react';
import './LoginPopup.css';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import logo from './assets/logo1.png'
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';

const { Title } = Typography;
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface LoginPopupProps {
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='header'>
      <Form className="login-popup"
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className='headerstyle'>
          <img className="icon" src={logo} />
          <Title className='logIn'>Login</Title>
          <div className='closebutton'><CloseOutlined className='textclose' onClick={onClose} /></div>
          <p className='getATourContainer'>Get a Tour in Thailand account and find your joy Wherever you travel in Thailand</p>
        </div>

        <div className='user'>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className='input' prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='input' />
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
        >
          <Checkbox className='checkbox'>Remember me</Checkbox>
        </Form.Item>

        <h1></h1>
        <a className='createAccount' onClick={() => navigate('/Register')}>Create account</a>

        <Form.Item >
          <button className='submitstyle'>
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPopup;