import { Layout } from 'antd';
import Contents from './component/Contents';
import ContentPackage from './component/ContentPackage';
import Headers from './component/Header/Headers';
import { Link } from 'react-router-dom';

const { Content } = Layout;

function Home() {
    return (
        <div>
            <div style={{position:'fixed',zIndex:1,width:'100%'}}>
                <Headers />
            </div>
            <Content style={{ background: '#fff', paddingBottom: 100 }}>
                <Contents />
                <div style={{overflow: 'hidden'}}>
                   <ContentPackage />
                </div>
            </Content>

      </div>
    );
}

export default Home;