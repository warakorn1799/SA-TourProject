import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const navigate = useNavigate();
    const showMenu = () => {
        navigate("/payment-Admin");
      };

    return (
        <div style={{width:300,height: 980, background: 'rgba(249, 217, 217, 0.25)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.60)'}}>
            <Button block type = 'text' onClick={() => {navigate('/admin/dashboard')}} style={{borderRadius: 0,textDecoration:'none',marginTop:58,height:90}}>
                <div style={{marginTop:20}}>
                <div style={{float:'left',marginLeft:15}}>
                    <img style={{width: 42, height: 42.67}} src="Rectangle 107.png"/>
                </div>
                <div style={{marginLeft:90,marginTop:7,color: '#505050', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word',position:'absolute'}}>Dashboard</div>
                </div>
            </Button>

            <Button block type = 'text' href='https://www.youtube.com/watch?v=wYyGNtePSDI&ab_channel=%E0%B8%AA%E0%B8%AA%E0%B8%AA.' style={{borderRadius: 0,textDecoration:'none',height:90}}>
                <div style={{marginTop:20}}>
                <div style={{float:'left',marginLeft:15}}>
                    <img style={{width: 42, height: 42.67}} src="Rectangle 109.png"/>
                </div>
                <div style={{marginLeft:90,marginTop:7,color: '#505050', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word',position:'absolute'}}>Tour package</div>
                </div>
            </Button>

            <Button block type = 'text' href='https://www.youtube.com/watch?v=2jk4pJQ3_R4&ab_channel=fecotspku' style={{borderRadius: 0,textDecoration:'none',height:90}}>
                <div style={{marginTop:20}}>
                <div style={{float:'left',marginLeft:15}}>
                    <img style={{width: 42, height: 42.67}} src="Rectangle 110.png"/>
                </div>
                <div style={{marginLeft:90,marginTop:7,color: '#505050', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word',position:'absolute'}}>Manage User</div>
                </div>
            </Button>

            <Button block type = 'text' onClick={showMenu} style={{borderRadius: 0,textDecoration:'none',height:90,background: 'rgba(252.01, 97.19, 48.30, 0.25)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                <div style={{marginTop:20}}>
                <div style={{float:'left',marginLeft:15}}>
                    <img style={{width: 42, height: 42.67}} src="Rectangle 111.png"/>
                </div>
                <div style={{marginLeft:90,marginTop:7,color: '#505050', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word',position:'absolute'}}>Manage Payment</div>
                </div>
            </Button>
        </div>
        
    );
  }
    
  export default App;
  