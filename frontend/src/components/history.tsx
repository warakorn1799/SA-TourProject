import { Button, ConfigProvider, Modal, message } from 'antd';
import { useEffect, useState } from 'react';
import { DeletePaymentByID, GetPayment } from '../services/http/paymentService';
import './history.css';
import Table, { ColumnsType } from 'antd/es/table';
import { PaymentInterface } from '../interfaces/IPayment';
import { GetBookingById } from '../services/http/bookingService';
import { BookingInterface } from '../interfaces/IBooking';
import { DeleteOutlined } from '@ant-design/icons';
import { GetMember } from '../services/http/memberService';
import { MemberInterface } from '../interfaces/IMember';

function App() {
    const [Booking, setBooking] = useState<BookingInterface[]>([]);

    const getBookingById = async (recordId: any) => {
        let res = await GetBookingById(Number(recordId));
        console.log(res)
        if (res) {
            setBooking(res.Package.Name);
        }
    };

    useEffect(() => {
        getPayment();
    }, []);

    const columns: ColumnsType<PaymentInterface> = [
        {
            title: "Fullname",
            dataIndex: "Fullname",
            key: "Fullname",
            render: (text, record) => {
                return <div>{record.Member?.Firstname}</div>;
            }
        },
        {
            title: "Email",
            dataIndex: "Email",
            key: "Email",
            render: (text, record, index) => (
                <div>{record.Member?.Email}</div>
            )
        },
        {
            title: "Date",
            dataIndex: "Date",
            key: "Date",
            render: (text, record, index) => (
                <div>{text.substring(0, 10)}</div>
            )
        },
        {
            title: "Price",
            dataIndex: "Price",
            key: "Price",
            render: (text, record, index) => (
                <div>{record.Booking?.Price}</div>
            )
        },
        {
            title: "Package",
            dataIndex: "Package",
            key: "Package",
            render(text, record) {
                getBookingById(record.BookingID)
                return <div>{Booking.toString()}</div>;
            }

        },
        {
            title: "Transfer slip",
            dataIndex: "Transfer slip",
            key: "Transfer slip",
            render: (text, record, index) => (
                <img src={record.Receipt} width={140} />
            )
        },
        {
            title: "Delete",
            dataIndex: "Delete",
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

    const [Member, setMember] = useState<MemberInterface[]>([]);

    const [messageApi, contextHolder] = message.useMessage();
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState<String>();
    const [deleteId, setDeleteId] = useState<Number>();

    const getMember = async () => {
        let res = await GetMember();
        if (res) {
            setMember(res);
        }
      };

    const showModal = (val: PaymentInterface) => {
        setModalText(
            `คุณต้องการลบข้อมูลการจ่ายเงินรหัส: "${val.ID} ของ ${val.Member?.Firstname} ${val.Member?.Lastname}" หรือไม่ ?`
        );
        setDeleteId(val.ID);
        setOpen(true);
    };

    const handleOk = async () => {
        setConfirmLoading(true);
        let res = await DeletePaymentByID(deleteId);
        if (res) {
          setOpen(false);
          messageApi.open({
            type: "success",
            content: "ลบข้อมูลสำเร็จ",
          });
          getMember();
          getPayment();
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

    const [Payment, setPayment] = useState<PaymentInterface[]>([]);

    const getPayment = async () => {
        let res = await GetPayment();
        if (res) {
            setPayment(res);
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {contextHolder}
            <div style={{ marginLeft: 44, marginTop: 32, width: 1138, height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #C2C2C2 solid' }} >
                <ConfigProvider theme={{ token: { colorBgContainer: '#F9D9D940', }, }}>
                    <Table columns={columns} dataSource={Payment} pagination={{ pageSize: 4 }} rowKey="ID" />
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
    );
}

export default App;