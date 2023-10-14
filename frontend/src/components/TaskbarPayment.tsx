import { Avatar, Layout, Image, MenuProps  } from 'antd';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CaretDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;
const items: MenuProps['items'] = [
  {
      label: 'Home',
      key: 'home',
      icon: <img src='Rectangle 34' />,
  },
  {
      label: 'Explore destinations',
      key: 'app',
      icon: <img src='Rectangle 33' />,
  },
  {
      label: 'Review',
      key: 'SubMenu',
      icon: <img src='Rectangle 31' />,
  },
  {
      label: 'Contact Us',
      key: 'contact',
      icon: <img src='Rectangle 32' />,
  },
];
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
        <Header style={{ backgroundColor: 'white', height: '72px', position: 'relative',display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
        <div style={{marginTop:'19px',marginLeft: '200px',width: 32, height: 31, background: 'linear-gradient(0deg, #FF5C00 0%, #FF5C00 100%)', borderRadius: 9999}}/>
        <div style={{marginTop:'19px',marginLeft: '4px',color: '#FF3D00', fontSize: 24, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Choose booking</div>
        <div style={{marginTop:'19px',marginLeft: '17px',width: 209, height: 0, border: '0.50px black solid'}}></div>
        <div style={{marginTop:'19px',marginLeft: '21px',width: 32, height: 31, background: 'linear-gradient(0deg, #FF5C00 0%, #FF5C00 100%)', borderRadius: 9999}}/>
        <div style={{marginTop:'19px',marginLeft: '4px',color: '#FC6130', fontSize: 24, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Enter Information</div>
        <div style={{marginTop:'19px',marginLeft: '15px',width: 250, height: 0, border: '0.50px black solid'}}></div>
        <img src="./Ellipse 34.png" alt="Car Icon" style={{ width: '32px', height: '31px',marginTop:'19px',marginLeft: '18px'}} />
        <div style={{marginTop:'19px',marginLeft: '4px',color: 'black', fontSize: 24, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Pay</div>
        </Header>
        <div style={{marginTop:'15px',marginLeft: '32px', width: 1375, boxShadow: '0px 4px 4px #C7C7C7', border: '0.25px #CCCCCC solid' }}></div>
      </Layout>
    </div>
  );
}
export default App;