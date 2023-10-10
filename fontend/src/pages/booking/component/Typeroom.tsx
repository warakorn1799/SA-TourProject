import React from "react";
import { Layout, Radio } from "antd";
import one from "./assets/one.png"
import double from "./assets/double.png"
import triple from "./assets/triple.png"
import family from "./assets/family.png"
import styles from './Typeroom.module.css'

function Typeroom() {
    return (
        <div className={styles.div}>
            <text className={styles.text}>Type of Room</text>
            <Layout className={styles.layout}>
                <img src={one} className={styles.imgone}></img>
                <text style={{ color: '#7A7A7A', marginLeft: '80px', marginTop: '-30px', font: '400 18px \'Roboto\', sans-serif', width: 200 }}>Single Room</text>
                <Radio style={{ margin: '-24px 200px' }}></Radio>

                <img src={double} style={{ width: '50px', marginTop: '-12.50px', marginLeft: '250px' }}></img>
                <text style={{ color: '#7A7A7A', marginLeft: '316px', marginTop: '-30px', font: '400 18px \'Roboto\', sans-serif', width: 200 }}>Double Room</text>
                <Radio style={{ margin: '-24px 440px' }}></Radio>

                <img src={family} style={{ width: '50px', marginTop: '50px', marginLeft: '250px' }}></img>
                <text style={{ color: '#7A7A7A', marginLeft: '316px', marginTop: '-30px', font: '400 18px \'Roboto\', sans-serif', width: 200 }}>family Room</text>
                <Radio style={{ margin: '-24px 440px' }}></Radio>

                <img src={triple} style={{ width: '50px', marginTop: '-10px', marginLeft: '15px' }}></img>
                <text style={{ color: '#7A7A7A', marginLeft: '80px', marginTop: '-30px', font: '400 18px \'Roboto\', sans-serif', width: 200 }}>Triple Room</text>
                <Radio style={{ margin: '-24px 200px' }}></Radio>
            </Layout>
        </div>
    );
}

export default Typeroom