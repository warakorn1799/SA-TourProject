import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import Sidebar from './Components/Taskbar/Taskbar';
import Taskbar from './Components/Header/Headers';
import { MemberInterface } from "../../interfaces/IMember";
import { DeleteMemberByID, GetMember } from "../../services/http/memberService";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Layout, Modal, message } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { GetCountry, GetCountryById } from "../../services/http/countryService";
import { CountryInterface } from "../../interfaces/ICountry";

function ManageUser() {

    useEffect(() => {
        getMember();
    }, []);

    const [countrys, setCountry] = useState<CountryInterface>();

    const getCountryByID = async (recordId: any) => {
        let res = await GetCountryById(Number(recordId));
        console.log(res)
        if (res) {
            setCountry(res.Name);
        }
    };

    const columns: ColumnsType<MemberInterface> = [
        {
            title: "Firstname",
            key: "Firstname",
            render: (text, record) => {
                return <div>{record.Firstname}</div>;
            }
        },
        {
            title: "Lastname",
            key: "Lastname",
            render: (text, record, index) => (
                <div>{record.Lastname}</div>
            )
        },
        {
            title: "Country",
            key: "Country",
            render: (text, record, index) => (
                <div>{record.country?.Name}</div>
            )
        },
        {
            title: "Email",
            key: "Email",
            render: (text, record, index) => (
                <div>{record.Email}</div>
            )
        },
        {
            title: "Password",
            key: "Password",
            render: (text, record, index) => (
                <div>{record.Password}</div>
            )

        },
        {
            title: "Phone",
            key: "Phone",
            render: (text, record, index) => (
                <div>{record.Phone}</div>
            )
        },
        {
            title: "Delete",
            key: "Delete",
            render: (text, record, index) => (
                <Button
                    onClick={() => showModal(record)}
                    style={{ marginLeft: 10 }}
                    shape="circle"
                    icon={<DeleteOutlined />}
                    size={"large"}
                    danger
                />
            )
        },
    ];

    const [messageApi, contextHolder] = message.useMessage();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState<String>();
    const [deleteId, setDeleteId] = useState<Number>();

    const showModal = (val: MemberInterface) => {
        setModalText(
            `คุณต้องการลบข้อมูลผู้ใช้รหัส: "${val.ID} ชื่อ ${val.Firstname} ${val.Lastname}" หรือไม่ ?`
        );
        setDeleteId(val.ID);
        setOpen(true);
    };

    const handleOk = async () => {
        setConfirmLoading(true);
        let res = await DeleteMemberByID(deleteId);
        if (res) {
            setOpen(false);
            messageApi.open({
                type: "success",
                content: "ลบข้อมูลสำเร็จ",
            });
            GetMember();
        } else {
            setOpen(false);
            messageApi.open({
                type: "error",
                content: "เกิดข้อผิดพลาด !",
            });
        }
        setConfirmLoading(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const [Member, setMember] = useState<MemberInterface[]>([]);

    const getMember = async () => {
        let res = await GetMember();
        if (res) {
            setMember(res);
        }
    };

    return (
        <div>
            <Layout>
                <Taskbar />
            </Layout>
            <Layout>
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <div style={{ width: '100%', height: '100%' }}>
                        {contextHolder}
                        <div style={{ marginLeft: 44, marginTop: 32, width: 1138, height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #C2C2C2 solid' }} >
                            <ConfigProvider theme={{ token: { colorBgContainer: '#F9D9D940', }, }}>
                                <Table columns={columns} dataSource={Member} pagination={{ pageSize: 4 }} rowKey="ID" />
                            </ConfigProvider>
                        </div>
                        <Modal
                            title="ลบข้อมูล ?"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <p>{modalText}</p>
                        </Modal>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default ManageUser;