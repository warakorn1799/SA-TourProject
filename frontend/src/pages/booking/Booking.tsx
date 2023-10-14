import { useState } from 'react';
import { Layout, Menu, MenuProps, Button, Steps, message, ConfigProvider, InputNumber, Radio, RadioChangeEvent } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import Informationgrid from './component/Informationgrid';
import Note from './component/Note';
import styles from './Booking.module.css'
import Headers from './component/Header/Headers';
import { useNavigate } from 'react-router-dom';


const { Header, Content } = Layout;
function Booking() {

  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
    navigate('/payment');
  };

  const onChange = (value: number | null) => {
    console.log('changed', value);
  }

  const [value, setValue] = useState(1);
  const onChanges = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
          <Informationgrid />
          <div className={styles.divheader}>
            <p className={styles.text}>Quantity</p>
            <Layout className={styles.layouts}>
              <p className={styles.text2}>Adult</p>
              <p className={styles.textprice}>฿ 7,500</p>
              <p className={styles.text2}>Child</p>
              <p style={{ marginLeft: '85px', marginTop: '-22px', width: 200 }}>(under 13 years-old)</p>
              <p className={styles.textprice}>฿ 1,500</p>
              <InputNumber className={styles.inputnumber} min={0} max={99} defaultValue={0} onChange={onChange} />
              <InputNumber className={styles.inputnumber2} min={0} max={99} defaultValue={0} onChange={onChange} />
            </Layout>
          </div>
          <Note></Note>
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