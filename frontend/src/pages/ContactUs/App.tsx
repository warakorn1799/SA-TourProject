import { Layout } from 'antd';
import Taskbar from '../Detail_package/Header/Taskbar';
import Contact from './Contact';

function App() {
  return (
    <Layout>
      
      <Layout style={{ zIndex: 1 }}>
        <Taskbar />
      </Layout>
      <Layout>
        <Contact />
      </Layout>
      
    </Layout>
  );
}

export default App;
