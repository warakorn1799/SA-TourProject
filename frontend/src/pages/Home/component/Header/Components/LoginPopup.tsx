import React, { useState } from 'react';
import { Checkbox, Form, Input, Typography, message } from 'antd';
import logo from './assets/logo1.png'
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom';
import { GetMember, GetMemberByEmail } from '../../../../../services/http/memberService'
import { MemberInterface } from '../../../../../interfaces/IMember';
import styles from './LoginPopup.module.css'

const { Title } = Typography;
type FieldType = {
  email?: string;
  password?: string;
};

interface LoginPopupProps {
  onClose: () => void;
}

export let member: MemberInterface | undefined;
const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [users, setUsers] = useState<MemberInterface[]>([]);
  
  const getMemberByEmail = async (values: any) => {
    const res = await GetMemberByEmail(values.email);
    if (res) {
      member = res;
      setUsers(res);
      return res;
    }
  };
  const onFinish = async (values: any) => {
    let res = await getMemberByEmail(values);
    if (res) {
      setUsers(res)
      if (res.Email == values.email && res.Password == values.password) {
        console.log('Success');
        member = res;
        messageApi.open({
          type: 'success',
          content: 'Login Success',
        });
        setTimeout(() => {
          onClose();
        }, 1000);

      } else {
        console.log('Failed');
        member = undefined;
        messageApi.open({
          type: 'error',
          content: 'Incorrect password or email. Please try again!',
        });
      }
    }
   };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const createAccount = () => {
    navigate('/Register')
    member = undefined;
  }

  return (
    <div className={styles.header}>
      {contextHolder}
      <Form className={styles.login_popup}
        name="nest-messages"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <div className={styles.headerstyle}>
          <img className="icon" src={logo} />
          <Title className='logIn'>Login</Title>
          <div className={styles.closebutton}><CloseOutlined className={styles.textclose} onClick={onClose} /></div>
          <p className={styles.getATourContainer}>Get a Tour in Thailand account and find your joy Wherever you travel in Thailand</p>
        </div>

        <div className={styles.user}>
          <Form.Item<FieldType>
            label="Emailㅤㅤ"
            name='email'
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              className={styles.input}
              prefix={<UserOutlined />}
              value='nop@gmail.com'
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              className={styles.input} />
          </Form.Item>
        </div>
        <h1></h1>
        <a className={styles.createAccount} onClick={createAccount}>Create account</a>

        <Form.Item >
          <button className={styles.submitstyle} type='submit'>
            Submit
          </button>
        </Form.Item>

      </Form>
    </div>
  );
}


export default LoginPopup;