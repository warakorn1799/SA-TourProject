import { Layout, Button } from 'antd';
import { Menu } from 'antd';
import styles from './Taskbar.module.css'
import dashboards from './assets/dashboard.png'
import packages from './assets/package.png'
import users from './assets/user.png'
import payments from './assets/payment.png'
import { useNavigate } from 'react-router-dom';

function Taskbar() {
    const navigate = useNavigate();
    return (
        <div className={styles.header}>
            <Button style={{ borderRadius: 0, textDecoration: 'none', height: 90, background: 'rgba(252.01, 97.19, 48.30, 0.25)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                block type='text' onClick={() => { navigate('/admin/dashboard') }}>
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left', marginLeft: 15 }}>
                        <img style={{ width: 42, height: 42.67 }} src={dashboards} />
                    </div>
                    <div className={styles.text}>Dashboard</div>
                </div>
            </Button>

            <Button className={styles.btn_item2} block type='text' >
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left', marginLeft: 15 }}>
                        <img style={{ width: 42, height: 42.67 }} src={packages} />
                    </div>
                    <div className={styles.text}>Tour package</div>
                </div>
            </Button>

            <Button className={styles.btn_item2} block type='text' onClick={() => { navigate('/admin/manageuser') }} >
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left', marginLeft: 15 }}>
                        <img style={{ width: 42, height: 42.67 }} src={users} />
                    </div>
                    <div className={styles.text} >Manage User</div>
                </div>
            </Button>

            <Button className={styles.btn_item2} block type='text' onClick={() => { navigate('/payment-Admin') }}>
                <div style={{ marginTop: 20 }}>
                    <div style={{ float: 'left', marginLeft: 15 }}>
                        <img style={{ width: 42, height: 42.67 }} src={payments} />
                    </div>
                    <div className={styles.text}>Manage Payment</div>
                </div>
            </Button>


        </div>
    );
}

export default Taskbar;