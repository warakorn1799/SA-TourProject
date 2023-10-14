import { Layout } from "antd";
import warnic from "./assets/warining.png"
import telic from "./assets/telcontect.png"
import emailic from "./assets/email.png"
import styles from './Note.module.css'
function Note() {
    return (
        <div className={styles.div}>
            <Layout style={{
                background: '#FFFFFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.20)',
                borderRadius: '10px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'orange', width: 620, height: 430, marginTop: 30
            }}>
                <div style={{
                    background: '#FCF327CF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.20)', width: 200, height: 70, marginTop: 15,
                    marginLeft: 15, alignContent: 'center'
                }}>
                    <p style={{ font: '700 24px \'Roboto\', sans-serif', marginLeft: 70, marginTop: 18 }}>Note</p>
                </div>
                <img src={warnic} style={{ width: 15, height: 20, marginTop: '30px', marginLeft: '45px' }} />
                <img src={warnic} style={{ width: 15, height: 20, marginTop: '5px', marginLeft: '45px' }} />
                <img src={warnic} style={{ width: 15, height: 20, marginTop: '5px', marginLeft: '45px' }} />
                <img src={warnic} style={{ width: 15, height: 20, marginTop: '35px', marginLeft: '45px' }} />
                <div >
                    <Warnning />
                </div>
                <div style={{ marginTop: 20 }}>
                    <p style={{ font: '700 20px \'Roboto\', sans-serif', color: 'red', marginLeft: 70 }}>
                        Having booking problems?</p>
                </div>
                <div style={{ marginTop: 20 }}>
                    <p style={{ font: '500 20px \'Roboto\', sans-serif', color: '#505050', marginLeft: 70 }}>
                        Please contect Us</p>
                </div>
                <div style={{ marginTop: 10 }}>
                    <img src={telic} style={{ width: 40, height: 40, marginLeft: 90 }}></img>
                    <p style={{ font: '700 18px \'Roboto\', sans-serif', marginLeft: 15 }}>
                        096-814-0228</p>
                </div>
                <div style={{ marginTop: -40, marginLeft: 190 }}>
                    <img src={emailic} style={{ width: 40, height: 40, marginLeft: 90 }}></img>
                    <p style={{ font: '700 18px \'Roboto\', sans-serif', marginLeft: 15 }}>
                        TourinThailand@gmail.com</p>
                </div>
                <div>

                </div>
            </Layout>
        </div>
    );
}

function Warnning() {
    return (
        <div style={{ marginLeft: 70, marginTop: -125 }}>
            <div style={{ height: 131, width: 530 }}><p style={{ font: '200 16px IBM Plex Sans Thai', marginLeft: 0 }}>ยกเลิกก่อนการเดินทางตั้งแต่ 30 วันเป็นต้นไป คืนเงินทั้งหมด <br />
                หากยกเลิกก่อนการเดินทาง 15-29 วัน ขอสงวนสิทธิ์ในการคืนเงินมัดจำทุกกรณี<br />
                ยกเลิกก่อนการเดินทาง 1-14 วัน ขอสงวนสิทธิ์ไม่คืนเงินค่าทัวร์ทั้งหมด ยกเว้นมีกรณีพิเศษ จะพิจารณาตามความสมควร <br />
                การเลื่อนการเดินทาง ควรแจ้งล่วงหน้าก่อนอย่างน้อย 15 วันก่อนการเดินทาง
            </p></div>
        </div>

    );
}

export default Note