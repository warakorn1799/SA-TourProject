import Taskbar from '../../pages/booking/component/Header/Headers';
import Sidebar from '../../components/menu';
import Bodys from '../../components/history';
import { Layout, } from 'antd';


function App() {
  return (
    <div>
      <Layout>
        <Taskbar/>
      </Layout>
      <Layout>
        <div style={{display:'flex'}}>
          <div>
          <Sidebar/>
          </div>
          <div style={{width:'100%',height:'100%'}}>
          <Bodys/>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
