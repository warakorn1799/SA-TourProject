import { Button, Menu, MenuProps } from 'antd';
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
            label: 'Review',
            key: 'SubMenu',
            icon: <img src={review} />,
        },
        {
            label: 'Contact Us',
            key: 'contact',
            icon: <img src={contact} />,
        },
    ];
    const [current, setCurrent] = useState('home');
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
        if (e.key == "contact") {
            console.log('your select contact');
            navigate('/payment');
        }
    };

    const [isLoginPopupOpen, setState] = useState(false);
    const successes = () => {
        setState(true);
    }
    const closePopup = () => {
        setState(false);
    };
    console.log(isLoginPopupOpen);

    return (
        <Header className={styles.Header}>
            <img src={logo} className={styles.logo} />
            <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {isLoginPopupOpen && <LoginPopup
                onClose={closePopup} />}
            <Button className={styles.buttonstyle} style={{ borderRadius: '29px', backgroundColor: '#fc6130' }} type="primary" onClick={successes} size={size}>
                Login
            </Button>

        </Header>
    );
}

export default Headers;