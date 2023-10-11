import { useState } from 'react'
import { Layout, Select, Col, Row, Input, Button } from 'antd';
import homeimg from './assets/homeimg.png'
import styles from './Contentstyle.module.css'
import { UserOutlined } from '@ant-design/icons';
import { GetMemberById, GetMember } from '../../../services/http/memberService'
import { MemberInterface } from '../../../interfaces/IMember';

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
        <Layout>
            <div className={styles.picture}>
                <img className={styles.rectangleIcon} src={homeimg} />
                <div className={styles.textsearch}>Your world of joy</div>
                <div className={styles.textsearch2}>เปิดประสบการณ์แห่งความสนุกได้ทุกที่ทั่วไทย</div>

                <div className={styles.searchbar}>
                    <UserOutlined className={styles.searchbar}></UserOutlined>
                    <input className={styles.searchbar} placeholder='Search'></input></div>
            </div>
            <div className={styles.divborder}>
                <Row className={styles.divstyle}>
                    <Col style={{ marginRight: 50 }}>

                        <Select
                            className={styles.selects}
                            status='warning'
                            size='middle'
                            placeholder="Category types"
                            onChange={handleChange}
                            options={[
                                { value: 'None', label: 'None', }
                            ]}
                        />
                    </Col>
                    <Col style={{ marginRight: 50 }}>
                        <Select
                            className={styles.selects}
                            status='warning'
                            size='middle'
                            placeholder="Participation date"
                            onChange={handleChange}
                            options={[
                                { value: 'None', label: 'None' }
                            ]}
                        />
                    </Col>
                    <Col>
                        <Select
                            className={styles.selects}
                            status='warning'
                            size='middle'
                            placeholder="recommended"
                            onChange={handleChange}
                            options={[
                                { value: 'None', label: 'None' },
                                { value: 'Nopx', label: 'Nop' }
                            ]}
                        />
                    </Col>
                </Row >
                <div style={{ marginTop: 20 }}>
                </div>
            </div>
        </Layout >
    );
}
export default Contents;