import './Overview.css';
function App() {
  return (
    <div className='border'>
      <div className='head1'>
        <img src="carlogo.png" />
        <div style={{color: '#FC6130', fontSize: 25,marginTop:33}}>Tour in Thailand (Sample Ticket!!!)</div>
      </div>
      <div className='head2'>
        <div>ชื่อทัวร์ที่ท่านจอง</div>
      </div>
      <div className='Rcontainer'>
        <div className='containerA'>
          <div>Travel date: ตั้งเเต่วันที่ - ถึงวันที่ </div>
          <div>Name: ชื่อ-นามสกุล</div>
          <div>Quantity: จำนวนคน ราคา</div>
          <div>Total: ราคา</div>
        </div>
        <div className='container2'>
          <div>Booking ID: #รหัสการจอง </div>
          <div>Phone number: เบอร์</div>
        </div>
        <div style={{marginTop:330,marginLeft:32,color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word',position:'absolute'}}>Thank you again for booking with us. We sincerely hope you enjoyed your trip and will come back again!</div>
      </div>
    </div>
  );
}

export default App;
