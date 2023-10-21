import { Avatar, Layout, Image } from 'antd';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CaretDownOutlined } from '@ant-design/icons';
import styles from './Headers.module.css'
import Car_Icon from './assets/carlogo.png'
import bell from './assets/bell.png'
import letter from './assets/letter.png'

const { Header } = Layout;
const { SubMenu } = Menu;

function Headers() {
  return (
    <div className={styles.Header}>
      <div className={styles.logo} >
        <img src={Car_Icon} />
        <h1 className={styles.headerText}>Tour in Thailand</h1>
      </div>
      <div className={styles.menuitem}>
        <div style={{marginTop: 43, }}>
          <img style={{ width: 24, height: 26 }} src={bell} />
        </div>

        <div style={{ marginLeft: 19, marginTop: 43, }}>
          <img style={{ width: 33, height: 26 }} src={letter} />
        </div>
        <div style={{ marginLeft: 23 }}>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <Menu className={styles.menu} mode="horizontal" defaultSelectedKeys={['mail']}>
          <SubMenu key="SubMenu" icon={<CaretDownOutlined />}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default Headers;