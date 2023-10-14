import Taskbar from '../../pages/booking/component/Header/Headers';
import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import Table from 'antd/es/table';
import { useEffect, useState } from 'react';
import { BookingInterface } from '../../interfaces/IBooking';
import { GetBookingByMemberID } from '../../services/http/bookingService';
import { Button, ConfigProvider } from 'antd';

const columns: ColumnsType<BookingInterface> = [
  {
    title: "Booking ID",
    dataIndex: "ID",
    key: "BookingID",
  },
  {
    title: "Package",
    dataIndex: "Package",
    key: "Package",
    render: (text, record) => record.Package?.Name,
  },
  {
    title: "Days",
    dataIndex: "Todate",
    key: "Days",
    render: (record) => record.Todate ? record.Todate.toISOString().substring(0, 10) : '',
  },
  {
    title: "Adult",
    dataIndex: "Adult",
    key: "Adult",
  },
  {
    title: "Childen",
    dataIndex: "Chil",
    key: "Childen",
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Review",
    render: () => (
      <>
        <Button type="primary" shape="circle" size="large" style={{width:80, backgroundColor: '#fc6130', fontSize: 16, borderRadius: '29px', borderColor: '#fc6130', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)' }}>Review</Button>
      </>
    ),
  }
];

function App() {
  const [Booking, setBooking] = useState<BookingInterface[]>([]);

  const getBookingByMemberID = async () => {
    let res = await GetBookingByMemberID(Number(1));
    if (res) {
      setBooking(res);
    }
  };

  useEffect(() => {
    getBookingByMemberID();
  }, []);
  
  return (
    <>
      <div>
        <Taskbar />
      </div>
      <div>
        <div style={{ position: 'relative', marginLeft: '80px', top: '33px', color: '#505050', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>My bookings</div>
        <DownOutlined style={{ width: 17, height: 24.75, position: 'absolute', left: 230, top: 128 }} />
        <div style={{ marginTop: 80, marginLeft: 80, marginBottom: 20, width: 1368, height: '100%', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 43, border: '1px #FC6130 solid' }} >
          <div style={{ padding: 50 }}>
            <ConfigProvider theme={{ token: { colorBgContainer: '#F9D9D940',},}}>
              <Table columns={columns} dataSource={Booking  } />
              </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;