import { Button, ConfigProvider, Menu, MenuProps, Popconfirm, message } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import LoginPopup from './Components/LoginPopup';
import logo from './assets/logo.png'
import home from './assets/home.png'
import loca from './assets/location.png'
import review from './assets/review.png'
import contact from './assets/contact.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { member } from './Components/LoginPopup';

export let setlogout:boolean;
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
            console.log("statuslogin : ", islogin)
            console.log(member)
        }
        if (e.key == "app") {
            console.log('your select contact');
            navigate('/booking');
        }
    };

    useEffect(() => {
        const userIsLoggedIn = member? true : false;
        setIslogin(userIsLoggedIn);
        setlogout = false;
    },[member])
    
    const [islogin, setIslogin] = useState(false);
    const [isLoginPopupOpen, setState] = useState(false);
    const successes = () => {
        setState(true);
    }
    const closePopup = () => {
        setState(false);
        setIslogin(false);
    };

    const logout = () => {
        setIslogin(false);
        setlogout = true;
        navigate('/');
    }
    console.log(isLoginPopupOpen);

    const confirm = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        message.success('Log out success');
        logout()
    };
    const cancel = (e?: React.MouseEvent<HTMLElement>) => {
        console.log(e);
    };
    
    return (
        <Header className={styles.Header}>
            <img src="./carlogo.png" alt="Car Icon" style={{ width: '76.947px', height: '65.079px', margin:3}} />
            <h1 style={{marginTop:'32px', color: '#FC6130', fontSize: '23px', fontFamily: 'Roboto', fontWeight: '700',width:170 }}>Tour in Thailand</h1>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130',},}}>
            <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </ConfigProvider>
            {isLoginPopupOpen && <LoginPopup
                onClose={closePopup} />}

                {islogin? <Popconfirm
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
             : <Button className={styles.buttonstyle} style={{ borderRadius: '29px', backgroundColor: '#fc6130' }} type="primary" onClick={successes} size={size}>
                Login
            </Button> }
            

        </Header>
    );
}

export default Headers;