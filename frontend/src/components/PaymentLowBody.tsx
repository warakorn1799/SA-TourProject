import React, { useEffect, useState } from 'react';
import { Layout, Image, Button, Modal  } from 'antd';
import Uploads from "./Uploads";
import { img,Url } from './Uploads';
import Qr from "./Qr";
import Paypopup from "./Paypopup";
import { CreatePayment } from "../services/http/paymentService";
import { GetMemberById } from "../services/http/memberService";
import { GetBookingById } from "../services/http/bookingService";
import { PaymentInterface } from "../interfaces/IPayment";
import { MemberInterface } from "../interfaces/IMember";
import { BookingInterface } from "../interfaces/IBooking";
import { ImageUpload } from "../interfaces/IUpload";
const { Content } = Layout;

function Appss() {
  const [isQrModalVisible, setIsQrModalVisible] = useState(false);
  const [isPayModalVisible, setIsPayModalVisible] = useState(false);

  const [MemberID, setMemberID] = useState<MemberInterface | undefined>(undefined);
  const [BookingID, setBookingID] = useState<BookingInterface | undefined>(undefined);
  const [profile, setProfile] = useState<ImageUpload>()

  const showQR = () => {
    setIsQrModalVisible(true);
  };

  const QrCancel = () => {
    setIsQrModalVisible(false);
  };

  const getMemberById = async () => {
    let res = await GetMemberById(Number(1));
    if (res) {
      setMemberID(res.MemberID);
    }
  };
  
  const getBookingById = async () => {
    let res = await GetBookingById(Number(1));
    if (res) {
      setBookingID(res.BookingID);
    }
  };

  const showPay = async (values: PaymentInterface) => {
    values.Receipt = profile?.thumbUrl;
    let res = await CreatePayment(values);
    if (res.status) {
      console.log("done");
    } else {
      console.log("5555");
    }
  };

  const PayCancel = () => {
    setIsPayModalVisible(false);
  };

  useEffect(() => {
    getMemberById();
    getBookingById();
    
  }, []);
  console.log("img = ",img);
  console.log("url = ",Url);
  return (
    <div>
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
              <img style={{ marginTop: 360, marginLeft: -570, width: 88, height: 81, position: 'absolute' }} width={200} src="Rectangle 68.png" onClick={showQR }/>
              <Modal maskStyle={{ backdropFilter: 'blur(5px)',backgroundColor: 'transparent' }} visible={isQrModalVisible} onCancel={QrCancel} footer={[]} style={{ top: 5}}>
              <Qr /> 
              </Modal>
              <Button  onClick={showQR} type="link" style={{marginTop: 374, marginLeft: -462, color: '#505050',fontSize: 20,fontFamily: 'IBM Plex Sans Thai',fontWeight: '400',wordWrap: 'break-word',position: 'absolute', border: 'none' }}>
              <span style={{ textDecoration: 'underline' }}>Payment with QR Code</span>
              </Button>
            </div>
            <div>
            <Uploads />
            </div>
            <Button onClick={(event) => {event.preventDefault();showPay({ Receipt:"null",Date: new Date(), MemberID:MemberID,BookingID:BookingID});}} type="primary" shape="circle" size="large" style={{  width: 166, height: 57,marginTop: 40, marginLeft: 1000,backgroundColor: '#fc6130', fontSize: 16, borderRadius: '29px', borderColor: '#fc6130', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)'}}>Pay now</Button>
            <Modal maskStyle={{ backdropFilter: 'blur(5px)',backgroundColor: 'transparent' }} transitionName='' closable={false} visible={isPayModalVisible} onCancel={PayCancel} footer={[]} style={{ top: 100,textAlign:'center'}}>
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
