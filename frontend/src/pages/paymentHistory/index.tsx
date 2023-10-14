import Taskbar from '../../components/Taskbar';
import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import { GetBooking } from '../../services/http/bookingService';
import Table from 'antd/es/table';
import { useState } from 'react';
import { BookingInterface } from '../../interfaces/IBooking';
import { ConfigProvider } from 'antd';

const columns: ColumnsType<BookingInterface> = [
  {
    title: "Package",
    dataIndex: "PackageID",
    key: "Package",
  },
  {
    title: "Days",
    dataIndex: "Todate",
    key: "Days",
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
  },
  {
    title: "Booking ID",
    dataIndex: "ID",
    key: "BookingID",
  },
];

function App() {
  const [Booking, setBooking] = useState<BookingInterface[]>([]);
  const getPayment = async () => {
    let res = await GetBooking();
    if (res) {
      setBooking(res);
    }
  };
  getPayment();
  return (
    <>
      <div>
        <Taskbar />
      </div>
      <div>
        <div style={{ position: 'relative', marginLeft: '80px', top: '33px', color: '#505050', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>My bookings</div>
        <DownOutlined style={{ width: 17, height: 24.75, position: 'absolute', left: 230, top: 128 }} />
        <div style={{ marginTop: 80, marginLeft: 80, marginBottom: 20, width: 1368, height: 795, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 43, border: '1px #FC6130 solid' }} >
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