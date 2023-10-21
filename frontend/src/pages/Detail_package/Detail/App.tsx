import { Layout } from 'antd';
//import Taskbar from '../Header/Taskbar';
import Headers from '../../Home/component/Header/Headers';
import Detail from './Detail';

function App() {
  return (
    <Layout>
      
      <Layout style={{zIndex:1}}>
        <Headers />
      </Layout>
      <Layout>
        <Detail /> 
      </Layout>
      
    </Layout>
  );
}

export default App;