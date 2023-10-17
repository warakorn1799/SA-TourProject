import { useNavigate } from 'react-router-dom';

const App = () => {
  
  const navigate = useNavigate();
  const show = () => {
    navigate("/detail");
  };
  return (
        <div style={{height:430}}>
          <img src="Rectangle 131.png" alt="QR Code" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: 25, backgroundColor: 'transparent' }} />
          <div style={{position:'absolute'}}>
          <div style={{textAlign: 'center', color: '#FC6130', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>โปรดรออีเมลยืนยันผลการจอง</div>
          <div style={{textAlign: 'center', color: '#FC6130', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>ที่จะส่งถึงท่านภายใน 24 ชั่วโมงนี้</div>
          </div>
        </div>
  );
};

export default App;