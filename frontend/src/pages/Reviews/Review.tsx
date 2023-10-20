import './submit.css';
import Taskbar from './Header/Headers';
import { useNavigate } from 'react-router-dom'
import './body.css';
import React, { useState } from 'react';
import { Rate } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { GetBookingById,GetBooking } from '../../services/http/bookingService';
import {
  Form,
  Input,
  Upload,
} from 'antd';

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const { TextArea } = Input;

const desc = ['Terrible', 'Poor', 'Average', 'Very good', 'Excellent'];



function Review() {

  const navigate = useNavigate();
  const submit = () => {
    navigate('/SucessReview');
  };

  const [buttonTypes, setButtonTypes] = useState<{
    Couples: "primary" | "default";
    Family: "primary" | "default";
    Friends: "primary" | "default";
    Solo: "primary" | "default";
  }>({
    Couples: 'default',
    Family: 'default',
    Friends: 'default',
    Solo: 'default',
  });

  const handleButtonClick = (buttonName: keyof typeof buttonTypes) => {
    setButtonTypes((prevButtonTypes) => {
      const updatedButtonTypes = { ...prevButtonTypes };
      for (const key in updatedButtonTypes) {
        if (key === buttonName) {
          updatedButtonTypes[key as keyof typeof buttonTypes] = 'primary';
        } else {
          updatedButtonTypes[key as keyof typeof buttonTypes] = 'default';
        }
      }
      return updatedButtonTypes;
    });
  };
  const [value, setValue] = useState(3);

  const getBookingById = async () => {
    let res = await GetBookingById(Number(1));
    if (res) {
      console.log('fhgd = ',res)
      setFirstName(res.Adult)
    }
  };

  getBookingById();
  const [firstName, setFirstName] = useState<string | undefined>(undefined);

  return (
    <div>
      <div>
        <Taskbar/>
      </div>
      <div className="review">
        Review
        <div className='fram'>
          <div style={{ marginTop: 25 }}>
            <img src='Rectangle 81.png'></img>
          </div>
          <div className='review3'>
            {firstName}
          </div>
          <div className='review4'>
            <img src='location.png'></img>

            Chiang Mai, Thailand
          </div>


        </div>
        <button className='submit' onClick={submit}>
          Submit review
        </button>
        <div style={{ width: 540, height: -20, position: 'absolute', marginLeft: 470, transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #CCCCCC solid' }}></div>
      </div>

      <div className='body1'>
        Tell us, how was your visit?
        <div className='body2'>
          How would you rate your experience?
        </div>
        <div>
          <span className='body3'>
            <Rate className="large-rate" tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            <div className='body4'>
              Who did you go with?
            </div>
            <Space wrap>
              <Button type={buttonTypes.Couples} className={`custom-button ${buttonTypes.Couples}`} onClick={() => handleButtonClick('Couples')}>
                Couples
              </Button>
            </Space>
            <Space wrap>
              <Button type={buttonTypes.Family} className={`custom-button ${buttonTypes.Family}`} onClick={() => handleButtonClick('Family')}>
                Family
              </Button>
            </Space>
            <Space wrap>
              <Button type={buttonTypes.Friends} className={`custom-button ${buttonTypes.Friends}`} onClick={() => handleButtonClick('Friends')}>
                Friends
              </Button>
            </Space>
            <Space wrap>
              <Button type={buttonTypes.Solo} className={`custom-button ${buttonTypes.Solo}`} onClick={() => handleButtonClick('Solo')}>
                Solo
              </Button>
            </Space>

          </span>
        </div>
        <div className=''>
          <Form.Item label="" >
            <TextArea placeholder="Write your review. The views were amazing. We took so many photos!..." rows={4} />
          </Form.Item>

          <Form.Item label="Upload Image" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

        </div>
      </div>
    </div>

  );
}
export default Review;
