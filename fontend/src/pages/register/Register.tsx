import React, { useState } from 'react';
import styles from './Register.module.css';
import { Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CreateMember } from '../../services/http/memberService';
import { MemberInterface } from '../../interfaces/IMember';

type FieldType = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;

};

function Register() {
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleConfirmation = async (values: MemberInterface) => {
    let res = await CreateMember(values);
    if (res.status) {
      messageApi.open({
        type: 'success',
        content: 'Sign in successfully. Please wait 3 seconds to back home page.',
        duration: 10,
      })
      setTimeout(() => {
        setConfirmation(true);
        navigate('/');
      }, 3000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ!!",
      });
    }
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    handleConfirmation(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.header}>
      <Form className={styles.reg_popup}
        name="Register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className={styles.headerstyle}>
          <title className={styles.logIn}>Sign In</title>
        </div>

        <div className={styles.user}>
          <Form.Item<FieldType> style={{ color: 'red' }}
            label=""
            name="firstname"

            rules={[{ required: true, message: 'Please input your Firstname!' }]}

          >
            <Input className={styles.input} placeholder="Fistname"/>
          </Form.Item>
          <Form.Item<FieldType>
            label=""
            name="lastname"
            rules={[{ required: true, message: 'Please input your Lastname!' }]}
          >
            <Input className={styles.input} placeholder="Lastname"/>
          </Form.Item>
          <Form.Item<FieldType>
            label=""
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input className={styles.input} placeholder="Email"/>
          </Form.Item>

          <Form.Item<FieldType>
            label=""
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className={styles.input} placeholder="Password"/>
          </Form.Item>
        </div>

        <h1></h1>
        <a className={styles.gotohome} onClick={() => navigate('/Home')}>Back to Home page</a>

        <Form.Item >
          {contextHolder}
          <button className={styles.submitstyle}>
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;