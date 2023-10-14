import Taskbar from '../../components/Taskbar';
import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import { GetBooking_MemberById } from '../../services/http/bookingMemberService';
import { GetMemberById } from '../../services/http/memberService';
import Table from 'antd/es/table';
import { useEffect, useState } from 'react';
import { Booking_MemberInterface } from '../../interfaces/IBooking_member';
import { ConfigProvider } from 'antd';

const columns: ColumnsType<Booking_MemberInterface> = [
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
  const [Booking, setBooking] = useState<Booking_MemberInterface[]>([]);
  const [Member, setMember] = useState<Booking_MemberInterface[]>([]);

  const getBooking = async () => {
    let res = await GetBooking_MemberById(1);
    if (res) {
      setBooking(res);
    }
  };

  const getMember = async () => {
    let res = await GetMemberById(1);
    if (res) {
      setMember(res);
    }
  };

  useEffect(() => {
    getBooking();
    getMember();
  }, []);

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