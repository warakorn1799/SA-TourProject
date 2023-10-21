import { Avatar, Button, ConfigProvider, Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import LoginPopup from './Components/LoginPopup';
import logo from './assets/logo.png'
import home from './assets/home.png'
import loca from './assets/location.png'
import review from './assets/review.png'
import contact from './assets/contact.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { member } from '../../../Home/component/Header/Components/LoginPopup';
import { UserOutlined } from '@ant-design/icons';

function Headers() {
    const navigate = useNavigate();
    const [size] = useState<SizeType>('large'); // default is 'middle'

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: 'home',
            icon: <img src={home} />,
        },
        {
            label: 'Explore destinations',
            key: 'app',
            icon: <img src={loca} />,
        },
        {
            label: 'My booking',
            key: 'booking',
            icon: <img src={review} />,
        },
        {
            label: 'Contact Us',
            key: 'contact',
            icon: <img src={contact} />,
        },
    ];
    const [current, setCurrent] = useState('booking');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key == "home") {
            console.log('your select home');
            navigate('/');
        }
        if (e.key == "app") {
            console.log('your select contact');
            navigate('/booking');
        }
    };

    const showAvartar = () => {
        if (member?.Profile == '') {
            return <Avatar icon={<UserOutlined />} alt='phoflie' size={45} />
        } else {
            return <Avatar src={member?.Profile} alt='phoflie' size={45} icon={<UserOutlined />} />
        }
    }

    return (
        <Header className={styles.Header}>
            <img src="./carlogo.png" alt="Car Icon" style={{ width: '76.947px', height: '65.079px', margin: 3 }} />
            <h1 style={{ marginTop: '32px', color: '#FC6130', fontSize: '23px', fontFamily: 'Roboto', fontWeight: '700', width: 170 }}>Tour in Thailand</h1>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130', }, }}>
                <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </ConfigProvider>
            
            <div style={{ position: 'absolute', marginLeft: 1300, marginTop: 10 }}>
                <div className={styles.avatar} style={{ position: 'absolute' }}>
                    {showAvartar()}
                </div>
            </div>
        </Header>
    );
}

export default Headers;