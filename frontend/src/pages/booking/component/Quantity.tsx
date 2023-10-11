import React from "react";
import { Layout, InputNumber } from "antd";
import styles from './Quantity.module.css'

const onChange = (value: number | null) => {
    console.log('changed', value);
};
function Quantity() {
    return (
        <div className={styles.divheader}>
            <p className={styles.text}>Quantity</p>
            <Layout className={styles.layouts}>
                <text className={styles.text2}>Adult</text>
                <text className={styles.textprice}>฿ 7,500</text>
                <text className={styles.text2}>Child</text>
                <text style={{ marginLeft: '85px', marginTop: '-22px', width: 200 }}>(under 13 years-old)</text>
                <text className={styles.textprice}>฿ 1,500</text>
                <InputNumber className={styles.inputnumber} min={0} max={99} defaultValue={0} onChange={onChange} />
                <InputNumber className={styles.inputnumber2} min={0} max={99} defaultValue={0} onChange={onChange} />
            </Layout>
        </div>
    );
}

export default Quantity