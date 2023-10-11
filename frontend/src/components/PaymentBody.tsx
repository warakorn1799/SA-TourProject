import { MemberInterface } from "../interfaces/IMember";
import {useState,useEffect} from "react";
import { Layout  } from 'antd';
import {GetMemberById} from '../services/http/memberService';
import './PaymentBody.css'; 

const { Content } = Layout;

function Apps(){
  
  const [members, setMember] = useState<MemberInterface[]>([]);
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [Phone, setPhone] = useState<string | undefined>(undefined);
  const [Email, setEmail] = useState<string | undefined>(undefined);



  const getMemberById = async () => {
    let res = await GetMemberById(Number(1));
  
    if (res) {
      setMember(res);
      setFirstName(res.Firstname);
      setLastName(res.Lastname);
      setCountry(res.Country.Name);
      setPhone(res.Phone);
      setEmail(res.Email);
    }
  };

  useEffect(() => {
    getMemberById();
  }, []);
  console.log(members)

    return(
        <div>
          <Layout>
            <Content style={{ backgroundColor: 'white',display: 'flex'}}>
            <div style={{marginTop:'11px',marginLeft:'300px',color: 'black', fontSize: 32, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Booking Details</div>
            </Content>
          </Layout>
          <Layout style={{ backgroundColor:'#FFFFFF'}}>
            <Content style={{ backgroundColor: 'white', height: '328px',display: 'flex',marginTop:'15px'}}>
            <div style={{ marginTop: '10px',marginLeft: '300px', width: '392px', height: '257px', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '0.50px #FC6130 solid', position: 'relative' }}>
            <p className="info" style={{ marginLeft: 30, marginTop: 15}}>First name</p>
            <p className="info" style={{ marginLeft: 81, marginTop: 15}}>{firstName}</p>
            <p className="info" style={{ marginLeft: 30, marginTop: -5}}>Last name</p>
            <p className="info" style={{ marginLeft: 85, marginTop: -5}}>{lastName}</p>
            <p className="info" style={{ marginLeft: 30, marginTop: -5}}>Country of Passport</p>
            <p className="info" style={{ marginLeft: 15, marginTop: -5}}>{country}</p>
            <p className="info" style={{ marginLeft: 30, marginTop: -5}}>Phone number </p>
            <p className="info" style={{ marginLeft: 48, marginTop: -5}}>{Phone}</p>
            <p className="info" style={{ marginLeft: 30, marginTop: -5}}>Email</p>
            <p className="info" style={{ marginLeft: 30, marginTop: -5}}>{Email}</p>
            </div>
            <div style={{marginLeft: '30px',width: 539, height: 278, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '0.50px #FC6130 solid'}} >
            <p style={{marginLeft: 50, marginTop: 15,color: 'black', fontSize: 24, fontFamily: 'IBM Plex Sans Thai', fontWeight: '700', wordWrap: 'break-word', display: 'inline-block'}}>ทัวร์เชียงใหม่ แม่กำปอง ม่อนแจ่ม 3 วัน 2 คืน</p>
            <div style={{marginTop: -18}}>
            <p className="info" style={{ marginLeft: 50, marginTop: 15}}>Travel date</p>
            <p className="info" style={{ marginLeft: 65, marginTop: 15}}>28 Sep 2023 - 30 Sep 2023</p>
            <p className="info" style={{ marginLeft: 50, marginTop: -5}}>Quantity</p>
            <p className="info" style={{ marginLeft: 94, marginTop: -5}}>1 X Adult</p>
            <div style={{marginLeft:16,marginTop: 13}}>
            <p className="info" style={{ marginLeft: 355, marginTop: 50}}>Total</p>
            <p style={{ marginLeft: 15, marginTop: -15, color: '#FC6130', fontSize: 36, fontFamily: 'Noto Looped Thai UI', fontWeight: '700', wordWrap: 'break-word', display: 'inline-block' }}>7,500</p>
            </div>
            </div>
            </div>
            </Content>
          </Layout>

        </div>
      );
}
export default Apps;