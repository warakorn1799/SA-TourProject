import { Button, ConfigProvider, Menu, MenuProps, Popconfirm, message, Avatar } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import LoginPopup from './Components/LoginPopup';
import home from './assets/home.png'
import loca from './assets/location.png'
import review from './assets/review.png'
import contact from './assets/contact.png'
import styles from './Headers.module.css'
import { useNavigate } from 'react-router-dom';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { member } from './Components/LoginPopup';
import SubMenu from 'antd/es/menu/SubMenu';

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
            key: 'review',
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
        if (e.key == "review") {
            navigate('/Review');
        }
        if (e.key == "contact") {
            navigate('/Contact');
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
    const onClickMenu: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key == "Home") {
            navigate('/');
        }if (e.key == "Review") {
            navigate('/review');
        }if (e.key == "Booking") {
            navigate('/payment-history');
        }
        if (e.key == "contact") {
            navigate('/Contact');
        }
    };
    
    const showAvartar = () => {
        if(member?.Profile == ''){
            console.log(12)
            return <Avatar icon={<UserOutlined />} alt='phoflie' size={45} />
        }else{
            console.log(12222)
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
            {isLoginPopupOpen && <LoginPopup
                onClose={closePopup} />}

            {islogin ? <div style={{ position: 'absolute', marginLeft: 1300, marginTop: 10 }}>
                <div className={styles.avatar} style={{ position: 'absolute' }}>
                {showAvartar()}
                </div>

                <div style={{ marginLeft: 40, marginTop: -10, position: 'absolute' }}>
                    <Menu style={{ marginTop: '32px', marginLeft: '2px', background: 'none' }} mode="horizontal" defaultSelectedKeys={['']} onClick={onClickMenu}>
                        <SubMenu key="SubMenu" icon={<CaretDownOutlined />}>
                                <Menu.Item key="Home">Home</Menu.Item>
                                <Menu.Item key="Review">Review</Menu.Item>
                                <Menu.Item key="Booking">My Booking</Menu.Item>
                                <Menu.Item key="Contact Us">Contact Us</Menu.Item>
                                <Popconfirm
                                 title="Logout"
                                 description="Are you sure to Logout?"
                                 onConfirm={confirm}
                                 onCancel={cancel}
                                 okText="Yes"
                                 cancelText="No" > 
                                 <button className={styles.buttonmanu} style={{backgroundColor: '#FC6130',marginLeft:20,marginBottom:20}}>
                                    <p style={{color:'white', fontSize: '18px',fontFamily:'Roboto', fontWeight: 550}}> Log out</p>
                                 </button>
                            </Popconfirm>
                        </SubMenu>
                    </Menu>
                </div>
            </div>

                : <Button className={styles.buttonstyle} style={{ borderRadius: '29px', backgroundColor: '#fc6130' }} type="primary" onClick={successes} size={size}>
                    <p style={{ margin: '-5px', fontFamily: 'Roboto', fontSize: '20px', fontWeight: 700, color: 'white' }}>Log in</p>
                </Button>}


        </Header>
    );
}

export default Headers;