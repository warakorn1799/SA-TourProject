import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const App = () => {
  
  const [Ticket, setTicketVisible] = useState(false);
  const navigate = useNavigate();
  const show = () => {
    setTicketVisible(true);
    navigate("/payment-Admin");
  };
  return (
        <div style={{height:430}}>
          <img src="Rectangle 131.png" alt="QR Code" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 25, backgroundColor: 'transparent' }} />
          <div style={{position:'absolute'}}>
          <div style={{textAlign: 'center', color: '#FC6130', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>โปรดรออีเมลยืนยันผลการจอง</div>
          <div style={{textAlign: 'center', color: '#FC6130', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>ที่จะส่งถึงท่านภายใน 24 ชั่วโมงนี้</div>
          <Button onClick={show} type="primary" shape="circle" size="large" style={{ marginTop:30,width: 200, height: 57, backgroundColor: '#fc6130', fontSize: 16, borderRadius: '29px', borderColor: '#fc6130', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)' }}>คลิกเพื่อ เเสดงตัวอย่างตั๋ว</Button>
          </div>
        </div>
  );
};

export default App;