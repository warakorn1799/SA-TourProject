import { useState } from 'react';
import { Layout, Menu, MenuProps, Button, Steps, message } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import Informationgrid from './component/Informationgrid';
import Quantity from './component/Quantity';
import Typeroom from './component/Typeroom';
import Note from './component/Note';
import styles from './Booking.module.css'
import Headers from './component/Header/Headers';

const { Header, Content } = Layout;
function Booking() {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  return (
    <Layout>
      <Headers/>
      <Content style={{ background: '#FFFFFF', paddingBottom: 50 }}>
        <Layout style={{ paddingBottom: 50, backgroundColor: 'white' }}>
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
              paddingLeft: 200, paddingRight: 200, paddingTop: 20
            }}
          />
        </Layout>
        <Layout className={styles.form}>
          <text className={styles.contact_text} style={{ fontWeight: 700, fontSize: 36 }}>Contact Information</text>
          <Informationgrid />
          <Quantity />
          <Typeroom />
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