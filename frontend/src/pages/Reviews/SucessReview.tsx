import './SucessReview.css';
import Taskbar from '../Home/component/Header/Headers';
import React from 'react';
import { Progress } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';

import { Rate } from 'antd';
import { useEffect, useState } from "react";

function SucessReview() {

  const App: React.FC = () => (
    <>
      <p></p>
      
      <Rate disabled defaultValue={5} className="orange-rate" />
      <p></p>
      <Progress percent={99} size="small" strokeColor="orange" />
      <Progress percent={1} size="small" strokeColor="orange" />
      <Progress percent={1} size="small" strokeColor="orange" />
      <Progress percent={0} size="small" strokeColor="orange" />
      <Progress percent={0} size="small" strokeColor="orange" />



    </>
  );
  //scroll
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const newScrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPercent(newScrollPercent);
    });
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);


  return (
    <div>
      <div>
        <Taskbar/>
      </div>
      <div className="title">
        Review
      </div>
      <div>
        <img src='ขอบคุณ.png' className='logo'></img>
        <div className='thankyou'>Thank you for sharing your experience with us!</div>
        <div className='thankyou2'>รีวิวของท่านจะปรากฎที่หน้า Package ในเร็วๆนี้</div>
        <div className='thankyou3'>นักเดินทางคนอื่นๆ จะเห็นรีวิวของท่านและใช้เป็นข้อมูลในการตัดสินใจ</div>
      </div>
      <div style={{ width: 1289.49, marginTop: 350, marginLeft: 80, height: 5.03, boxShadow: '0px 4px 4px #C7C7C7', border: '1px #CCCCCC solid' }}></div>
      <div className='title2'>
        Review
      </div>
      <div className='contenner'>
        <div className='point'>5</div>
        <div className='rate'> <App /></div>
        <div className='reviewed'>1,847 Reviews</div>
        <div className='Excellent'>Excellent</div>
        <div className='Verygood'>Very good</div>
        <div className='Average'>Average</div>
        <div className='Poor'>Poor</div>
        <div className='Terrible'>Terrible</div>
      </div>
      <div className="container">
        <div className="content" style={{ transform: `translate(-50%, -${scrollPercent * 0.5}%)` }}>

          <div className=''>
            <img src='แมวอ้วก.png'></img>
            <div className='name1'>Farn Salaemae</div>
            <div className='date'>2023/02/25</div>
            <div className='with'>• Friends</div>
            <div className='comments'>ทัวร์ดีมากกก บริการดี  วิวสวยมากครับ</div>
            <img src='imgreview1.png' className='img1'></img>
            <img src='imgreview2.png' className='img2'></img>
            <img src='imgreview3.png' className='img3'></img>
            <p></p>
            <p></p>
            <p></p>
            <div className='subtitle3'>
              <img src='แมวอ้วก.png'></img>
              <div className='name1'>Farn Salaemae</div>
              <div className='date'>2023/02/25</div>
              <div className='with'>• Friends</div>
              <div className='comments'>ทัวร์ดีมากกก บริการดี  วิวสวยมากครับ</div>
              <img src='imgreview1.png' className='img4'></img>
              <img src='imgreview2.png' className='img5'></img>
              <img src='imgreview3.png' className='img6'></img>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <img src='แมวอ้วก.png'></img>
              <div className='name1'>Farn Salaemae</div>
              <div className='date'>2023/02/25</div>
              <div className='with'>• Friends</div>
              <div className='comments'>ทัวร์ดีมากกก บริการดี  วิวสวยมากครับ</div>
              <img src='imgreview1.png' className='img4'></img>
              <img src='imgreview2.png' className='img5'></img>
              <img src='imgreview3.png' className='img6'></img>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <img src='แมวอ้วก.png'></img>
              <div className='name1'>Farn Salaemae</div>
              <div className='date'>2023/02/25</div>
              <div className='with'>• Friends</div>
              <div className='comments'>ทัวร์ดีมากกก บริการดี  วิวสวยมากครับ</div>
              <img src='imgreview1.png' className='img4'></img>
              <img src='imgreview2.png' className='img5'></img>
              <img src='imgreview3.png' className='img6'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucessReview;
