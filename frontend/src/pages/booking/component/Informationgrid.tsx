import React, { useEffect, useState } from "react";
import { Layout, Input, DatePicker, Col, Row } from 'antd';
import type { DatePickerProps } from 'antd';
import styles from './Informationgrid.module.css'
import { GetMember, GetMemberById } from "../../../services/http/memberService";
import { MemberInterface } from "../../../interfaces/IMember";
import { member } from "../../Home/component/Header/Components/LoginPopup";

function Informationgrid() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  }
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [Phone, setPhone] = useState<string | undefined>(undefined);
  const [Email, setEmail] = useState<string | undefined>(undefined);

  const getMemberById = async () => {
    let res = await GetMemberById(Number(member?.ID));

    if (res) {
      setFirstName(res.Firstname);
      setLastName(res.Lastname);
      setCountry(res.Country.Name);
      setEmail(res.Email);
      setPhone(res.Phone);
    }
  };

  useEffect(() => {
    getMemberById();
  },[])

  return (
    <div>
      <div className={styles.div1}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Firstname</p>
            <p className={styles.output2}>{firstName}</p>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Lastname</p>
            <p className={styles.output2}>{lastName}</p>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Country</p>
            <p className={styles.output2}>{country}</p>
          </Col>
        </Row>
      </div>
      <div className={styles.div2}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Email</p>
            <p className={styles.output2}>{Email}</p>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <p className={styles.firstname}>Phone number</p>
            <p className={styles.output2}>{Phone}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Informationgrid