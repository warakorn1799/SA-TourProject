import './App.css';
import Taskbar from './pages/booking/component/Header/Headers';
import PaymentBody from './components/PaymentBody'
import PaymentLowBody from './components/PaymentLowBody'
import { ConfigProvider, Steps } from 'antd';

function App() {
  return (
    <>
      <Taskbar />
      <div style={{marginBottom:30}}>
        <ConfigProvider theme={{ token: { colorPrimary: '#FC6130', colorBorder: "white" }, }}>
          <Steps
            size="small"
            current={2}
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
      </div>
      <PaymentBody />
      <PaymentLowBody />
    </>
  );
}

export default App;
