import { Layout, Carousel } from 'antd';
import React from 'react'
import Headers from './Component/Header/Headers';
import styles from './Detail.module.css'
import kampong1 from './assets/kampong1.jpg'
import kampong2 from './assets/kampong2.jpg'
import kampong3 from './assets/kampong3.jpg'
import kampong4 from './assets/kampong4.jpg'


const contentStyle1: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(\'https://www.hashcorner.com/wp-content/uploads/2020/11/Mae-Kampong-Chiang-Mai-16.jpg\')',
    backgroundSize: 'cover',
    borderRadius: '20px'
};
const contentStyle2: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(\'https://www.hashcorner.com/wp-content/uploads/2020/11/Mae-Kampong-Chiang-Mai-14.jpg\')',
    backgroundSize: 'cover',
    borderRadius: '20px'
};
const contentStyle3: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(\'https://www.hashcorner.com/wp-content/uploads/2020/11/Mae-Kampong-Chiang-Mai-08.jpg\')',
    backgroundSize: 'cover',
    borderRadius: '20px'
};
const contentStyle4: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundImage: 'url(\'https://www.hashcorner.com/wp-content/uploads/2020/11/Mae-Kampong-Chiang-Mai-16.jpg\')',
    backgroundSize: 'cover',
    borderRadius: '20px'
};

function Detail1() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <Layout className={styles.body}>
            <Headers />
            <div className={styles.name_package}>
                <h1 className={styles.name}>ทัวร์เชียงใหม่ กันเถอะพี่น้อง</h1>
            </div>
            <div className={styles.img_style}>
                <Carousel autoplay afterChange={onChange}>
                    <div>
                        <h3 style={contentStyle1}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle2}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle3}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle4}>4</h3>
                    </div>
                </Carousel>
            </div>
        </Layout>
    );
}

export default Detail1;