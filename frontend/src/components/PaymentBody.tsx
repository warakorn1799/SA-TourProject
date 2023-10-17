import { useState, useEffect } from "react";
import { Layout } from 'antd';
import { GetMemberById } from '../services/http/memberService';
import { GetBookingById } from '../services/http/bookingService';
import { member } from '../pages/Home/component/Header/Components/LoginPopup';
import './PaymentBody.css';
import { BookingIDs } from "../pages/booking/Booking";
const { Content } = Layout;

function Apps() {

  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [Phone, setPhone] = useState<string | undefined>(undefined);
  const [Email, setEmail] = useState<string | undefined>(undefined);

  const [Fromdate, setFromdate] = useState<string | undefined>(undefined);
  const [Todate, setTodate] = useState<string | undefined>(undefined);
  const [Package, setPackage] = useState<string | undefined>(undefined);
  const [Adult, setAdult] = useState<string | undefined>(undefined);
  const [Childen, setChilden] = useState<string | undefined>(undefined);
  const [Price, setPrice] = useState<string | undefined>(undefined);

  const getMemberById = async () => {
    let res = await GetMemberById(Number(member?.ID));

    if (res) {
      setFirstName(res.Firstname);
      setLastName(res.Lastname);
      setCountry(res.Country.Name);
      setPhone(res.Phone);
      setEmail(res.Email);
    }
  };

  const getBookingById = async () => {
    let res = await GetBookingById(Number(BookingIDs));
    if (res) {
      setFromdate(res.Fromdate.substring(0, 10).replace(/-/g, " "));
      setTodate(res.Todate.substring(0, 10).replace(/-/g, " "));
      setPackage(res.Package.Name);
      setAdult(res.Adult);
      setChilden(res.Chil);
      setPrice(res.Price);
    }
  };

  useEffect(() => {
    getMemberById();
    getBookingById();
  }, []);

  return (
    <div>
      <Layout>
        <Content style={{ backgroundColor: 'white', display: 'flex' }}>
          <div style={{ marginTop: '11px', marginLeft: '300px', color: 'black', fontSize: 32, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Booking Details</div>
        </Content>
      </Layout>
      <Layout style={{ backgroundColor: '#FFFFFF' }}>
        <Content style={{ backgroundColor: 'white', height: '328px', display: 'flex', marginTop: '15px' }}>
          <div style={{ marginTop: '10px', marginLeft: '300px', width: '392px', height: '257px', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '0.50px #FC6130 solid', position: 'relative' }}>
            <div>
              <p className="infos" style={{ marginLeft: 30, marginTop: 15 }}>First name</p>
              <p className="infos" style={{ marginLeft: 81, marginTop: 15 }}>{firstName}</p>
            </div>
            <div>
              <p className="infos" style={{ marginLeft: 30, marginTop: 15 }}>Last name</p>
              <p className="infos" style={{ marginLeft: 85, marginTop: 15 }}>{lastName}</p>
            </div>
            <div>
              <p className="infos" style={{ marginLeft: 30, marginTop: 15 }}>Country of Passport</p>
              <p className="infos" style={{ marginLeft: 15, marginTop: 15 }}>{country}</p>
            </div>
            <div>
              <p className="infos" style={{ marginLeft: 30, marginTop: 15 }}>Phone number </p>
              <p className="infos" style={{ marginLeft: 48, marginTop: 15 }}>{Phone}</p>
            </div>
            <div>
              <p className="infos" style={{ marginLeft: 30, marginTop: 15 }}>Email</p>
              <p className="infos" style={{ marginLeft: 30, marginTop: 15 }}>{Email}</p>
            </div>
          </div>
          <div style={{ marginLeft: '30px', width: 539, height: 278, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '0.50px #FC6130 solid' }} >
            <p style={{ marginLeft: 50, marginTop: 15, color: 'black', fontSize: 24, fontFamily: 'IBM Plex Sans Thai', fontWeight: '700', wordWrap: 'break-word', display: 'inline-block' }}>{Package}</p>
            <div style={{ marginTop: -18 }}>
              <p className="infos" style={{ marginLeft: 50, marginTop: 20 }}>Travel date</p>
              <p className="infos" style={{ marginLeft: 65, marginTop: 40 }}>{Fromdate} ถึง {Todate}</p>
              <p className="infos" style={{ marginLeft: 50, marginTop: 40 }}>Quantity</p>
              <p className="infos" style={{ marginLeft: 94, marginTop: 20 }}>{Adult} X Adult and {Childen} X Childen</p>
              <div style={{ marginLeft: 16, marginTop: 13 }}>
                <p className="infos" style={{ marginLeft: 355, marginTop: 50 }}>Total</p>
                <p style={{ marginLeft: 15, marginTop: -15, color: '#FC6130', fontSize: 36, fontFamily: 'Noto Looped Thai UI', fontWeight: '700', wordWrap: 'break-word', display: 'inline-block' }}>{Price}</p>
              </div>
            </div>
          </div>
        </Content>
      </Layout>

    </div>
  );
}
export default Apps;