import { Layout } from 'antd';
import { useParams } from 'react-router-dom';

import Taskbar from '../Header/Taskbar';
import Detail from './Detail';

function App() {
  const { id } = useParams();
  return (
    <Layout>
      
      <Layout style={{ zIndex: 1 }}>
        <Taskbar />
      </Layout>
      <Layout>
        <Detail /> {id}
      </Layout>
      
    </Layout>
  );
}

export default App;