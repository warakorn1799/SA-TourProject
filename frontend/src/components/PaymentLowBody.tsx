import React, { useEffect, useState } from 'react';
import { Layout, Image, Button, Modal,message } from 'antd';
import Uploads from "./Uploads";
import { img, Url, Base64 } from './Uploads';
import Qr from "./Qr";
import Paypopup from "./Paypopup";
import { CreatePayment } from "../services/http/paymentService";
import { GetMemberById } from "../services/http/memberService";
import { GetBookingById } from "../services/http/bookingService";
import { PaymentInterface } from "../interfaces/IPayment";
import { MemberInterface } from "../interfaces/IMember";
import { BookingInterface } from "../interfaces/IBooking";
import { useNavigate } from 'react-router-dom';
import { member } from '../pages/Home/component/Header/Components/LoginPopup';
import { BookingIDs } from '../pages/booking/Booking';

const { Content } = Layout;
function Appss() {
  const [isQrModalVisible, setIsQrModalVisible] = useState(false);
  const [isPayModalVisible, setIsPayModalVisible] = useState(false);
  const navigate = useNavigate();
  const [MemberID, setMemberID] = useState<MemberInterface | undefined>(undefined);
  const [BookingID, setBookingID] = useState<BookingInterface | undefined>(undefined);
  const [messageApi, contextHolder] = message.useMessage(); 
  const showQR = () => {
    setIsQrModalVisible(true);
  };

  const QrCancel = () => {
    setIsQrModalVisible(false);
  };

  const getMemberById = async () => {
    let res = await GetMemberById(Number(member?.ID));
    if (res) {
      setMemberID(res);
    }
  };

  const getBookingById = async () => {
    let res = await GetBookingById(Number(BookingIDs));
    if (res) {
      setBookingID(res);
    }
  };  

  const showPay = async (values: PaymentInterface) => {
    values.Receipt = Base64[0]
    values.BookingID = BookingID?.ID 
    values.MemberID = MemberID?.ID 
    console.log('values = ',values)
    if (Base64[0] != null) {
      let res = await CreatePayment(values);
      setIsPayModalVisible(true);
      setTimeout(() => {
        PayCancel();
        navigate("/payment-history");
      }, 10000);
      window.open("/detail");
    } else {
      messageApi.open({
        type: "error",
        content: "กรุณาใส่รูปสลิปเงิน",
      });
    }
  };


  const PayCancel = () => {
    setIsPayModalVisible(false);
  };

  useEffect(() => {
    getMemberById();
    getBookingById();

  }, []);

  console.log("base=",Base64);
  console.log("img=",img);
  console.log("url=",Url);

  const values = {
    Receipt: '',
    Date: new Date(),
    MemberID: 0,
    BookingID: 0
  };

  return (
    <div>
      {contextHolder}
      <Layout>
        <Content style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: 1187, height: 510, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '0.50px #FC6130 solid', position: 'relative' }}>
            <div>
              <Image style={{ marginTop: 50, marginLeft: 39, width: 65, height: 66, position: 'absolute' }} width={200} src="krungthailogo.png" />
              <p style={{ marginTop: 66, marginLeft: 122, color: '#505050', fontSize: 20, fontFamily: 'IBM Plex Sans Thai', fontWeight: '400', wordWrap: 'break-word', position: 'absolute' }}>ธนาคารกรุงไทย  เลขบัญชี 678-903-8159 ชื่อบัญชี นายวรากร เผ่าทหาร</p>
              <Image style={{ marginTop: 150, marginLeft: -163, width: 65, height: 66, position: 'absolute' }} width={200} src="kasikornlogo.png" />
              <p style={{ marginTop: 163, marginLeft: 122, color: '#505050', fontSize: 20, fontFamily: 'IBM Plex Sans Thai', fontWeight: '400', wordWrap: 'break-word', position: 'absolute' }}>ธนาคารไทยพาณิชย์ เลขบัญชี 848-265-1718 ชื่อบัญชี นายวรากร เผ่าทหาร</p>
              <Image style={{ marginTop: 230, marginLeft: -389, width: 120, height: 100, position: 'absolute' }} width={200} src="PromptPaylogo.jpg" />
              <p style={{ marginTop: 263, marginLeft: 150, color: '#505050', fontSize: 20, fontFamily: 'IBM Plex Sans Thai', fontWeight: '400', wordWrap: 'break-word', position: 'absolute' }}>พร้อมเพย์ หมายเลข 096-814-0228 ชื่อ นายวรากร เผ่าทหาร</p>
              <img style={{ marginTop: 360, marginLeft: -570, width: 88, height: 81, position: 'absolute' }} width={200} src="Rectangle 68.png" onClick={showQR} />
              <Modal maskStyle={{ backdropFilter: 'blur(5px)', backgroundColor: 'transparent' }} visible={isQrModalVisible} onCancel={QrCancel} footer={[]} style={{ top: 5 }}>
                <Qr />
              </Modal>
              <Button onClick={showQR} type="link" style={{ marginTop: 374, marginLeft: -462, color: '#505050', fontSize: 20, fontFamily: 'IBM Plex Sans Thai', fontWeight: '400', wordWrap: 'break-word', position: 'absolute', border: 'none' }}>
                <span style={{ textDecoration: 'underline' }}>Payment with QR Code</span>
              </Button>
            </div>
            <div>
              <Uploads/>
            </div>
            <Button onClick={() => showPay(values)} type="primary" shape="circle" size="large" style={{ width: 166, height: 57, marginTop: 40, marginLeft: 1000, backgroundColor: '#fc6130', fontSize: 16, borderRadius: '29px', borderColor: '#fc6130', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)' }}>Pay now</Button>
            <Modal maskStyle={{ backdropFilter: 'blur(5px)', backgroundColor: 'transparent' }} transitionName='' closable={false} visible={isPayModalVisible} onCancel={PayCancel} footer={[]} style={{textAlign: 'center' }}>
              <Paypopup />
            </Modal>
          </div>
        </Content>
      </Layout>
      <Layout>
        <Content style={{ height: 50, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        </Content>
      </Layout>
    </div>
  );
}
export default Appss;
