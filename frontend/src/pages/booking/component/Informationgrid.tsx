import React, { useEffect, useState } from "react";
import { Layout, Input, DatePicker, Col, Row } from 'antd';
import type { DatePickerProps } from 'antd';
import styles from './Informationgrid.module.css'
import { GetMember } from "../../../services/http/memberService";
import { MemberInterface } from "../../../interfaces/IMember";

function Informationgrid() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  }

  const [member, setMember] = useState<MemberInterface[]>([]);
  const getMember = async () => {
    const res = await GetMember();
    if (res) {
      setMember(res);
      return res;
    }
  };

  return (
    <div>
      <div className={styles.div1}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Firstname</p>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Lastname</p>
            <Input className={styles.input_firstname} placeholder="Please enter" />
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Country of Passport</p>
            <Input className={styles.input_firstname} placeholder="Please enter" />
          </Col>
        </Row>
      </div>
      <div className={styles.div2}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Email</p>
            <Input className={styles.input_firstname} placeholder="Please enter" />
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Phone number</p>
            <Input className={styles.input_firstname} placeholder="Please enter" />
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Travel Date</p>
            <Input className={styles.input_firstname} placeholder="Please enter" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Informationgrid