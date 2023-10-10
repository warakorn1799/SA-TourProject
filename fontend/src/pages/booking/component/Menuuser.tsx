import React, { useState } from 'react';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import type { MenuProps, } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const { SubMenu } = Menu; // เพิ่ม SubMenu
// submenu keys of first level
const Menuuser: React.FC = () => {
  return (
    <div>
      <UserOutlined style={{height:20}}/>
      <Menu style={{ marginTop: '-20px', marginLeft: '20px', background: 'none' }} mode="horizontal" defaultSelectedKeys={['mail']}>
        <SubMenu key="SubMenu" icon={<MenuOutlined />}>
          <Menu.Item key="setting:1">Home</Menu.Item>
          <Menu.Item key="setting:2">Booking History</Menu.Item>
          <Menu.Item key="setting:3">Review</Menu.Item>
          <Menu.Item key="setting:4">Log out</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};
export default Menuuser;