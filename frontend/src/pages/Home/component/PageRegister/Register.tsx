<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import styles from './Register.module.css';
import { Form, Input, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CreateMember } from '../../../../services/http/memberService';
import { MemberInterface } from '../../../../interfaces/IMember'
import { CountryInterface } from '../../../../interfaces/ICountry';
import { GetCountry } from '../../../../services/http/countryService';
=======
import React, { useState } from 'react';
import styles from './Register.module.css';
import { Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CreateMember } from '../../../../services/http/memberService';
import { MemberInterface } from '../../../../interfaces/IMember';
>>>>>>> ab32e57f5623784788e01c3181319e3a34e38005

type FieldType = {
  firstname?: string;
  lastname?: string;
  email?: string;
<<<<<<< HEAD
  countryID?: CountryInterface;
  password?: string;
  phone?: string

};
const { Option } = Select;
=======
  password?: string;

};
>>>>>>> ab32e57f5623784788e01c3181319e3a34e38005

function Register() {
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
<<<<<<< HEAD
  const [country, setCountry] = useState<CountryInterface[]>([]);
=======
>>>>>>> ab32e57f5623784788e01c3181319e3a34e38005

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

<<<<<<< HEAD
  const getCountry = async () => {
    let res = await GetCountry();
    if (res) {
      setCountry(res);
    }
  };

  useEffect(() => {
    getCountry();
    console.log(country);
  }, []);

=======
>>>>>>> ab32e57f5623784788e01c3181319e3a34e38005
  const onFinish = (values: any) => {
    console.log('Success:', values);
    handleConfirmation(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.header}>
<<<<<<< HEAD
      <div className={styles.filters}>
        <Form className={styles.reg_popup}
          name="Register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className={styles.headerstyle}>
            <title className={styles.login}>Sign In</title>
          </div>

          <div className={styles.user}>
            <Form.Item<FieldType> style={{ color: 'red' }}
              label=""
              name="firstname"
              rules={[{ required: true, message: 'Please input your Firstname!' }]}

            >
              <Input className={styles.input} placeholder="Fistname" />
            </Form.Item>
            <Form.Item<FieldType>
              label=""
              name="lastname"
              rules={[{ required: true, message: 'Please input your Lastname!' }]}
            >
              <Input className={styles.input} placeholder="Lastname" />
            </Form.Item>
            <Form.Item<FieldType>
              label=""
              name="email"
              rules={[{ required: true, type: "email", message: 'Please input your Email!' }]}
            >
              <Input className={styles.input} placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              label=""
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password className={styles.input} placeholder="Password" />
            </Form.Item>


            <Form.Item<FieldType>
              label=""
              name="phone"
              rules={[{ required: true, message: 'Please input phone number' }]}
            >
              <Input className={styles.input} placeholder="Phone number" />
            </Form.Item>
          </div>
          <Form.Item<FieldType>
            label=""
            name="countryID"
            rules={[{ required: true, message: 'Please select your country!' }]}
          >
            <Select placeholder="Select Country" allowClear>
              {country.map((item) => (
                <Option value={item.ID} key={item.Name}>{item.Name}</Option>
              ))}
            </Select>
          </Form.Item>

          <h1></h1>
          <a className={styles.gotohome} onClick={() => navigate('/')}>Back to Home page</a>

          <Form.Item >
            {contextHolder}
            <button className={styles.submitstyle}>
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
=======
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
>>>>>>> ab32e57f5623784788e01c3181319e3a34e38005
    </div>
  );
}

export default Register;