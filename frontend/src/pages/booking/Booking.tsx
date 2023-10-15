import { useEffect, useState } from 'react';
import { Layout, Button, Steps, message, ConfigProvider, InputNumber, Radio, RadioChangeEvent, Select, DatePicker, DatePickerProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import Informationgrid from './component/Informationgrid';
import Note from './component/Note';
import styles from './Booking.module.css'
import Headers from './component/Header/Headers';
import { useNavigate } from 'react-router-dom';
import { RoomTypeInterface } from '../../interfaces/IRoomType';
import { GetRoomType } from '../../services/http/roomTypeService';
import { RangePickerProps } from 'antd/es/date-picker';
import { BookingInterface } from '../../interfaces/IBooking';
import { CreateBooking } from '../../services/http/bookingService';
import { GetPackageById } from '../../services/http/packageService';
import { PackageInterface } from '../../interfaces/IPackage';
import { member } from '../Home/component/Header/Components/LoginPopup';
import { GetMemberById } from '../../services/http/memberService';
import { MemberInterface } from '../../interfaces/IMember';

const { Option } = Select;
const { Header, Content } = Layout;


export let BookingIDs: Number | undefined;

function Booking() {
  useEffect(() => {
    getRoomType();
    getPackage(1);
    getMemberById(member?.ID)
  }, []);

  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [Value1, setInputValue1] = useState<number | null>(null);
  const [Value2, setInputValue2] = useState<number | null>(null);
  const [Fromdate, setFromdate] = useState<Date | null>(null);
  const [Todate, setTodate] = useState<Date | null>(null);
  const [RoomID, setRoomID] = useState<RoomTypeInterface | null>(null);
  const [PackageID, setPackageID] = useState<PackageInterface | null>(null);
  const [MemberID, setMemberID] = useState<MemberInterface | null>(null);

  let [price, setInputPrice] = useState<number | null>(0);
  const handleInput1Change = (value: number | null) => {
    setInputValue1(value);
  };
  const handleInput2Change = (value: number | null) => {
    setInputValue2(value);
  };

  const [room, setRoom] = useState<RoomTypeInterface[]>([]);
  const getRoomType = async () => {
    let res = await GetRoomType();
    if (res) {
      setRoom(res);
    }
  };

  const getPackage = async (id: Number | undefined) => {
    let res = await GetPackageById(id);
    if (res) {
      setPackageID(res.ID);
    }
  };
  const getMemberById = async (id: Number | undefined) => {
    let res = await GetMemberById(id);
    if (res) {
      setMemberID(res.ID);
    }
  };


  const handleRoomChange = (value: RoomTypeInterface) => {
    console.log(`selected ${value}`);
    setRoomID(value);
  };

  const { RangePicker } = DatePicker
  const onChanges = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    if (Array.isArray(dateString)) {
      setFromdate(new Date(dateString[0]));
      setTodate(new Date(dateString[1]));
      console.log('From Date: ', Fromdate);
      console.log('To Date: ', Todate);
    }
  };

  const success = async () => {
    let res = await CreateBooking(data);
    if (res.status) {
      BookingIDs = res.message.ID;
      messageApi.open({
        type: 'success',
        content: 'Sign in successfully. Please wait 3 seconds to back home page.',
        duration: 10,
      })
      setTimeout(() => {
        navigate('/payment');
      }, 3000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ!!",
      });
      console.log(res);
    }
  };
  const data: BookingInterface = {
    Fromdate: Fromdate != null ? Fromdate : undefined,
    Todate: Todate != null ? Todate : undefined,
    Price: Value1 != null && Value2 != null ? price = Value1 * 500 + Value2 * 1500 :
      Value1 != null ? price = Value1 * 500 :
        Value2 != null ? Value2 * 1500 : price = 0,
    Adult: Value2 == null ? 0 : Value2,
    Chil: Value1 == null ? 0 : Value1,
    PackageID: PackageID != null ? PackageID : undefined, // ต้องเป็น PackageInterface
    RoomTypeID: RoomID != null ? RoomID : undefined, // ต้องเป็น RoomTypeInterface
    MemberID: MemberID != null ? MemberID : undefined,
  };

  return (
    <Layout>
      <Headers />
      <Content style={{ background: '#FFFFFF', paddingBottom: 50 }}>
        <Layout style={{ paddingBottom: 50, backgroundColor: 'white' }}>
          <ConfigProvider theme={{ token: { colorPrimary: '#FC6130', colorBorder: "white" }, }}>
            <Steps
              size="small"
              current={1}
              items={[
                {
                  title: 'Choose package',
                },
                {
                  title: 'Enter Information',
                },
                {
                  title: 'Payment',
                },
              ]}
              style={{
                paddingLeft: 200, paddingRight: 200, paddingTop: 40
              }}
            />
          </ConfigProvider>
        </Layout>
        <Layout className={styles.form}>
          <p className={styles.contact_text} style={{ fontWeight: 700, fontSize: 36 }}>Contact Information</p>
          <div className={styles.Informationgrit}>
            <Informationgrid />
          </div>
          <div className={styles.roomtype}>
            <p className={styles.Date} style={{ fontWeight: 700, fontSize: 36 }}>Select Room</p>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130', colorBorder: "orange", }, }}>
              <Select style={{ position: "absolute", left: 90, top: 61, width: 200, boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.20)", borderRadius: 30 }}
                onChange={handleRoomChange}
                placeholder="Select Room Type" allowClear>
                {room.map((item) => (
                  <Option value={item.ID} key={item.Name}>{item.Name}</Option>
                ))}
              </Select>
            </ConfigProvider>
          </div>
          <div className={styles.date}>
            <p className={styles.Date} style={{ fontWeight: 700, fontSize: 36 }}>Select Date</p>
            <ConfigProvider theme={{ token: { colorPrimary: '#FC6130', colorBorder: "orange", }, }}>
              <RangePicker className={styles.datepicker} format="YYYY-MM-DD" onChange={onChanges} />
            </ConfigProvider>
          </div>
          <div className={styles.divheader}>
            <p className={styles.text} style={{ fontWeight: 700, fontSize: 36 }}>Quantity</p>
            <Layout className={styles.layouts}>
              <p className={styles.text2}>Adult</p>
              <p className={styles.textprice}>฿ 1,500</p>
              <p className={styles.text2}>Child</p>
              <p style={{ marginLeft: '85px', marginTop: '-22px', width: 200 }}>(under 13 years-old)</p>
              <p className={styles.textprice}>฿ 500</p>
              <InputNumber className={styles.inputnumber} min={0} max={99} defaultValue={0} value={Value2} onChange={handleInput2Change} />
              <InputNumber className={styles.inputnumber2} min={0} max={99} defaultValue={0} value={Value1} onChange={handleInput1Change} />

            </Layout>
          </div>
          <div className={styles.pricestyle}>
            <br />
            <p className={styles.pricefont} style={{ fontWeight: 700, fontSize: 45 }}>Price</p>
            <br /><br />
            <p className={styles.pricerate} style={{ fontWeight: 700, fontSize: 50 }}>
              {Value1 != null && Value2 != null ? price = Value1 * 500 + Value2 * 1500 :
                Value1 != null ? price = Value1 * 500 :
                  Value2 != null ? Value2 * 1500 : price = 0} ฿</p>
          </div>
          <div className={styles.notestyle}>
            <Note></Note>
          </div>
          <div>
            {contextHolder}
            <Button className={styles.button_gotopayment} style={{ borderRadius: '29px', backgroundColor: '#fc6130' }} type="primary" onClick={success} size={size}>
              Go to payment
            </Button>
          </div>
        </Layout>
      </Content >
    </Layout >
  );
}
export default Booking;