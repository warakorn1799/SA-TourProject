import { useState } from 'react'
import { Layout, Select, Col, Row, Input, Button } from 'antd';
import homeimg from './assets/homeimg.png'
import styles from './Contentstyle.module.css'
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { GetMemberById, GetMember } from '../../../services/http/memberService'
import { MemberInterface } from '../../../interfaces/IMember';
import { relative } from 'path';

function Contents() {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        getUsers();
        console.log(users[4]);
    };
    const [users, setUsers] = useState<MemberInterface[]>([]);
    const getUsers = async () => {
        const res = await GetMember();
        if (res) {
            setUsers(res);
            return res;
        }
        else {
            return false;
        }
    };

    return (
        <Layout style={{ overflow: 'hidden'}}>
            <div className={styles.picture}>
                <img className={styles.rectangleIcon} src={homeimg} />
                <div className={styles.textsearch}>Your world of joy</div>
                <div className={styles.textsearch2}>เปิดประสบการณ์แห่งความสนุกได้ทุกที่ทั่วไทย</div>

                <div className={styles.searchbar}>
                    <button><SearchOutlined style={{color:'black'}}/></button>
                    <input className={styles.searchbar} placeholder='Search' />
                </div>   
            </div>
        </Layout >
    );
}
export default Contents;