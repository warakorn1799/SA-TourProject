import { Layout } from 'antd';
import Contents from './component/Contents';
import ContentPackage from './component/ContentPackage';
import Headers from './component/Header/Headers';
const { Content } = Layout;

function Home() {
    return (
        <div>
            <Headers />
            <Content style={{ background: '#fff', paddingBottom: 100 }}>
                <Contents />
                <div>
                    <ContentPackage />
                </div>
            </Content>
        </div>
    );
}

export default Home;