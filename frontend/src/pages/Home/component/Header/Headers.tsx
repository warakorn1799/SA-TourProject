import { Button, ConfigProvider, Menu, MenuProps, Popconfirm, message } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import LoginPopup from './Components/LoginPopup';
import home from './assets/home.png'
import loca from './assets/Explore destinations.png'
import review from './assets/Review.png'
import contact from './assets/Contact Us.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { member } from './Components/LoginPopup';

function Headers() {
    const navigate = useNavigate();
    const [size] = useState<SizeType>('large'); // default is 'middle'

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            style: { color: '#505050',margin:'5px 0px'},
            key: 'home',
            icon: <img src={home} 
            style={{width:'23px', marginRight:'-7px'}}/>
        },
        {
            label: 'Explore destinations',
            style: { color: '#505050',margin:'5px 0px'},
            key: 'app',
            icon: <img src={loca}
            style={{width:'23px', marginRight:'-7px'}}/>
        },
        {
            label: 'Review',
            style: { color: '#505050',margin:'5px 0px'},
            key: 'review',
            icon: <img src={review} 
            style={{width:'23px', marginRight:'-7px'}}/>
        },
        {
            label: 'Contact Us',
            style: { color: '#505050',margin:'5px 0px'},
            key: 'contact',
            icon: <img src={contact} 
            style={{width:'30px', marginRight:'-7px', top:'5px',position:'relative'}}/>
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
        if (e.key == "review") {
            console.log('your select contact');
            navigate('/Review');
        }
        if (e.key == "contact") {
            console.log('your select contact');
            navigate('/Detail_package');
        }
    };

    useEffect(() => {
        const userIsLoggedIn = member ? true : false;
        setIslogin(userIsLoggedIn);
    }, [member])

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
        window.location.href = "/";
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
            <img src="./carlogo.png" alt="Car Icon" style={{ width: '58px', height:'50px', margin: '3px 0px' }} />
            <h1 style={{ position:'relative',marginTop:'20px', left:'-5px' , color: '#FC6130', fontSize: '23px', fontFamily: 'Roboto', fontWeight: '700', wordBreak:'keep-all' }}>Tour in Thailand</h1>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130', }, }}>
                <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </ConfigProvider>
            {isLoginPopupOpen && <LoginPopup
                onClose={closePopup} />}

            {islogin ? <Popconfirm
                title="Logout"
                description="Are you sure to Logout?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <Button className={styles.buttonstyle} style={{ borderRadius: '30px', backgroundColor: '#fc6130' }} type="primary" size={size}>
                <p style={{fontSize:'20px',fontFamily: 'Roboto', fontWeight:700, margin:'-5px'}}>Log out</p>
                </Button>
            </Popconfirm>
                : <Button className={styles.buttonstyle} style={{ borderRadius: '30px', backgroundColor: '#fc6130' }} type="primary" onClick={successes} size={size}>
                    <p style={{fontSize:'20px',fontFamily: 'Roboto', fontWeight:700, margin:'-5px'}}>Log in</p>
                </Button>}


        </Header>
    );
}

export default Headers;