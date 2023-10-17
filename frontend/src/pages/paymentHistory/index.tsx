import Taskbar from '../../pages/booking/component/Header/Headers';
import { DownOutlined } from '@ant-design/icons';
import type { ColumnsType } from "antd/es/table";
import Table from 'antd/es/table';
import { useEffect, useState } from 'react';
import { BookingInterface } from '../../interfaces/IBooking';
import { GetBookingByMemberID } from '../../services/http/bookingService';
import { Button, ConfigProvider } from 'antd';
import { member } from '../Home/component/Header/Components/LoginPopup';

export let PackageIDs: any;

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
    render(text, record) {
      console.log('r=',record)
      return <span>{record.Package?.Name}</span>;
    } 
  },
  {
    title: "Days",
    dataIndex: "Todate",
    key: "Days",
    render(text,record) {
      let fromDate;
      let todate;
      if (record.Fromdate) {
        fromDate = record.Fromdate.toString().substring(8,10); // ใช้ได้เมื่อ record.Fromdate ไม่เป็น undefined
      }if(record.Todate){
        todate = record.Todate.toString().substring(8,10); // ใช้ได้เมื่อ record.Fromdate ไม่เป็น undefined
      }
      let date;
      if (todate && fromDate) {
        date = parseInt(todate) - parseInt(fromDate);
      }
      return <span>{date+" วัน"}</span>;
    }
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
    render: (record) => (
      <>
        <Button onClick={() => clickReview(record.Package?.ID)} type="primary" shape="circle" size="large" style={{width:80, backgroundColor: '#fc6130', fontSize: 16, borderRadius: '29px', borderColor: '#fc6130', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)' }}>Review</Button>
      </>
    ),
  }
];


const clickReview = (packageId: any) => {
  console.log("Selected Package ID: ", packageId);
  window.open("/review");
  PackageIDs = packageId
};

function App() {
  const [Booking, setBooking] = useState<BookingInterface[]>([]);

  const getBookingByMemberID = async () => {
    let res = await GetBookingByMemberID(Number(member?.ID));
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
              <Table columns={columns} dataSource={Booking } />
              </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;