import './Note.css';

function App() {
  return (
    <div className='border-note'>
      <h1>Note: นี้เป็นเพียงตัวอย่างตั๋วที่ท่านต้องใช้ยืนยัน</h1>
      <div className='note'>
        <div className='img'>
            <img src = "Ellipse 20.png"></img>
            <img src = "Ellipse 20.png"></img>
            <img src = "Ellipse 20.png"></img>
            <br></br>
            <br></br>
            <img src = "Ellipse 20.png"></img>
        </div>
        <div className='textA'>
            <div>ยกเลิกก่อนการเดินทางตั้งแต่ 30 วันเป็นต้นไป คืนเงินทั้งหมด</div>
            <div>หากยกเลิกก่อนการเดินทาง 15-29 วัน ขอสงวนสิทธิ์ในการคืนเงินมัดจำทุกกรณี</div>
            <div>ยกเลิกก่อนการเดินทาง 1-14 วัน ขอสงวนสิทธิ์ไม่คืนเงินค่าทัวร์ทั้งหมด ยกเว้นมีกรณีพิเศษ</div>
            <div>จะพิจารณาตามความสมควร</div>
            <div>การเลื่อนการเดินทาง ควรแจ้งล่วงหน้าก่อนอย่างน้อย 15 วันก่อนการเดินทาง</div>
        </div>
      </div>
    </div>
  );
}

export default App;
