import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { GetPayment } from '../services/http/paymentService';
import './history.css';
import Table, { ColumnsType } from 'antd/es/table';
import { PaymentInterface } from '../interfaces/IPayment';
import { GetBookingById } from '../services/http/bookingService';
import { BookingInterface } from '../interfaces/IBooking';


function App() {
    const [Booking, setBooking] = useState<BookingInterface[]>([]);

    const getBookingById = async (recordId: any) => {
        let res = await GetBookingById(Number(recordId));
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
    ];

    const [Payment, setPayment] = useState<PaymentInterface[]>([]);

    const getPayment = async () => {
        let res = await GetPayment();
        if (res) {
            setPayment(res);
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ marginLeft: 44, marginTop: 32, width: 1138, height: '100%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px #C2C2C2 solid' }} >
                <ConfigProvider theme={{ token: { colorBgContainer: '#F9D9D940', }, }}>
                    <Table columns={columns} dataSource={Payment} pagination={{ pageSize: 4 }} />
                </ConfigProvider>
            </div>
        </div>
    );
}

export default App;