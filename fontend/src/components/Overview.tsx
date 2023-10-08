import './Overview.css';

function App() {
  return (
    <div className='border'>
      <div className='head1'>
        <img src="carlogo.png" />
        <div style={{color: '#FC6130', fontSize: 25,marginTop:33}}>Tour in Thailand</div>
      </div>
      <div className='head2'>
        <div>ทัวร์เชียงใหม่ แม่กำปอง ม่อนแจ่ม 3 วัน 2 คืน</div>
      </div>
      <div className='Rcontainer'>
        <div className='container'>
          <div>Travel date: 28 Sep 2023 - 30 Sep 2023 </div>
          <div>Name:                    Woraphong Pongpruttiwat </div>
          <div>Quantity: 1 X Adult ฿7,500</div>
          <div>Total ฿7,500</div>
        </div>
        <div className='container2'>
          <div>Booking ID: #4325689345345341 </div>
          <div>Phone number: 0123456789 </div>
        </div>
        <div style={{marginTop:330,marginLeft:32,color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word',position:'absolute'}}>Thank you again for booking with us. We sincerely hope you enjoyed your trip and will come back again!</div>
      </div>
    </div>
  );
}

export default App;
