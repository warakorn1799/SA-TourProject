import Taskbar from '../../components/Taskbar';
import { DownOutlined } from '@ant-design/icons';

function App() {
    return (
      <>
      <div>
        <Taskbar/>
      </div>
      <div>
          <div style={{position:'relative',left:'80px',top:'33px',color: '#505050', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>My bookings</div>
          <DownOutlined style={{width: 17, height: 24.75,position:'absolute',left:230,top:128}}/>
      </div>
      </>
    );
  }
  
  export default App;