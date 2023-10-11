import { Button, Menu, MenuProps, Popconfirm, message } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import home from './assets/home.png'
import loca from './assets/location.png'
import review from './assets/review.png'
import contact from './assets/contact.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import logo from './assets/logo.png'

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
    };

    const confirm = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.success('Log out success');
        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
    };
    const cancel = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
    };

    return (
        <Header className={styles.Header}>
            <img src={logo} className={styles.logo} />
            <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <Popconfirm
                title="Logout"
                description="Are you sure to Logout?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <Button className={styles.buttonstyle} style={{ borderRadius: '29px', backgroundColor: '#fc6130' }} type="primary" size={size}>
                    Logout
                </Button>
            </Popconfirm>
        </Header>
    );
}

export default Headers;