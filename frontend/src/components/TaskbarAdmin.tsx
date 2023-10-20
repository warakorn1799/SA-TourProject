import { ConfigProvider, Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import  { useState } from 'react'
import styles from './TaskbarAdmin.module.css'
import { useNavigate } from 'react-router-dom';

function Headers() {
    return (
        <Header className={styles.Header}>
            <img src="./carlogo.png" alt="Car Icon" style={{ width: '76.947px', height: '65.079px', margin:3}} />
            <h1 style={{marginTop:'32px', color: '#FC6130', fontSize: '23px', fontFamily: 'Roboto', fontWeight: '700',width:170 }}>Tour in Thailand</h1>
            <div style={{marginLeft:1000,marginTop:20}}>
            <img style={{}} src="bell.png" />
            <img style={{marginLeft:40}} src="letter.png" />
            </div>
        </Header>
    );
}

export default Headers;