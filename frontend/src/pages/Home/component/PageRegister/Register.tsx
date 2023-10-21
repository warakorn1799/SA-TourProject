import React, { useEffect, useState } from 'react';
import styles from './Register.module.css';
import { Avatar, Form, Input, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CreateMember } from '../../../../services/http/memberService';
import { MemberInterface } from '../../../../interfaces/IMember'
import { CountryInterface } from '../../../../interfaces/ICountry';
import { GetCountry } from '../../../../services/http/countryService';
import Uploads from './components/Uploads';
import { Base64 } from './components/Uploads';

type FieldType = {
  firstname?: string;
  lastname?: string;
  email?: string;
  country?: string;
  password?: string;
  phone?: string
  Profile?: string

};
const { Option } = Select;

function Register() {
  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  interface Country {
    cca3: string; // Adjust the types according to your data
    name: {
      common: string;
    };
  }
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const sortedCountries = countries.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
  useEffect(() => {
    // โหลดข้อมูลประเทศจาก API
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log('Loaded countries:', data);
      })
      .catch((error) => {
        console.error('Error loading countries:', error);
      });
  }, []);
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    console.log(selectedCountry);
  };

  const handleConfirmation = async (values: MemberInterface) => {
    values.Profile = Base64[0];
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
      console.log(res)
    }
  };

  useEffect(() => {
    console.log(selectedCountry);
  }, [selectedCountry]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    handleConfirmation(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.header}>
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
            name="country"
            rules={[{ required: true, message: 'Please select your country!' }]}
          >
            <Select
              showSearch
              placeholder="Select Country"
              allowClear
              value={selectedCountry}
              filterOption={(input, option) => {
                if (option && option.children) {
                  const children = option.children as unknown;
                  if (typeof children === 'string') {
                    return (children as string).toLowerCase().indexOf(input.toLowerCase()) >= 0;
                  }
                }
                return false;
              }}
              onChange={(value) => handleCountrySelect(value)}>

              {sortedCountries.map((country) => (
                <Option key={country.cca3} value={country.name.common}>
                  {country.name.common}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div>
            <Uploads />
          </div>
          <div style={{ marginTop: 120 }}>
            <h1></h1>
            <a className={styles.gotohome} onClick={() => navigate('/')}>Back to Home page</a>
            <Form.Item >
              {contextHolder}
              <button className={styles.submitstyle}>
                Submit
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Register;