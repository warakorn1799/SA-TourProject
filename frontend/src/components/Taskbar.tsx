import { Avatar, Layout, Image  } from 'antd';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;


function App(){
  const navigate = useNavigate();
  const showPay = () => {
    navigate('/payment-history');
};
  return(
    <div>
      <Layout style={{ backgroundColor:'#FFFFFF'}}>
        <Header style={{ backgroundColor: '#F9D9D940', height: '89px',display: 'flex', alignItems: 'center' }}>
        <img src="./carlogo.png" alt="Car Icon" style={{ width: '76.947px', height: '65.079px', margin:3}} />
        <h1 style={{marginTop:'32px', color: '#FC6130', fontSize: '23px', fontFamily: 'Roboto', fontWeight: '700',width:170 }}>Tour in Thailand</h1>
        <div style = {{marginLeft:380}}>
        <img style={{marginTop:28,width: 25, height: 27 }} src="Rectangle 34.png" />
        </div>
        <a onClick={showPay} target="_blank" rel="noopener noreferrer" style={{ marginTop:'5px',marginLeft: '12px',color: '#505050', fontSize: 23, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Home</a>
        <div style = {{marginLeft:11}}>
        <img style={{marginTop:28,width: 25, height: 27 }} src="Rectangle 33.png" />
        </div>
        <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer" style={{ marginTop:'5px',marginLeft: '7px',color: '#505050', fontSize: 23, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Explore destinations</a>
        <div style = {{marginLeft:16}}>
        <img style={{marginTop:28,width: 25, height: 27 }} src="Rectangle 31.png" />
        </div>
        <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer" style={{ marginTop:'5px',marginLeft: '5px',color: '#505050', fontSize: 23, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Review</a>
        <div style = {{marginLeft:17}}>
        <img style={{marginTop:28,width: 25, height: 27 }} src="Rectangle 32.png" />
        </div>
        <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer" style={{ marginTop:'5px',marginLeft: '6px',color: '#505050', fontSize: 23, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Contact Us</a>
        <div style = {{marginLeft:23}}>
        <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div>
          <Menu style={{marginTop: '32px',marginLeft: '2px', background: 'none' }} mode="horizontal" defaultSelectedKeys={['mail']}>
            <SubMenu key="SubMenu" icon={<CaretDownOutlined />}>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        </Header>
      </Layout>
    </div>
  );
}
export default App;