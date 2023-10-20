import './submit.css';
<<<<<<< HEAD
import Taskbar from './Header/Headers';
=======
import './body.css';
import Taskbar from '../Home/component/Header/Headers';
>>>>>>> eeec2486a751734bc7a011c31e77c3b6eb36ae56
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Rate, message } from 'antd';
import { PlusOutlined,UploadOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { GetBookingById, GetBooking } from '../../services/http/bookingService';
import { RateInterface } from '../../interfaces/IRate';
import { MemberInterface } from '../../interfaces/IMember';
import { GetMemberById } from '../../services/http/memberService';
import { GetRateById } from '../../services/http/rateService';
import { ReviewInterface } from '../../interfaces/IReview';
import { CreateReview } from '../../services/http/reviewService';
import { Form, Input, Upload, } from 'antd';
import { member } from '../Home/component/Header/Components/LoginPopup';
import { ImageUpload } from "../../interfaces/IUpload";

const { TextArea } = Input;

const desc = ['Terrible', 'Poor', 'Average', 'Very good', 'Excellent'];



function Review() {
  const navigate = useNavigate();
  const [messageApi, contexHolder] = message.useMessage();
  const [MemberID, setMemberID] = useState<MemberInterface | undefined>(undefined);
  const [RateID, setRateID] = useState<RateInterface | undefined>(undefined);
  const [buttonName, setButtonName] = useState<string>()
  const [reviewText, setReviewText] = useState('');
  const [profile, setProfile] = useState<ImageUpload>()
  const [userRating, setUserRating] = useState(0);


  const handleRatingChange = (value: number) => {
    setUserRating(value); // อัปเดต state เมื่อคะแนนเปลี่ยน
  };
  


  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setProfile(e?.fileList[0])
    return e?.fileList;
  };
  // ...
  
  console.log('profile:', profile);
  console.log('image = ', profile?.thumbUrl);
  
  const getMemberById = async () => {
    let res = await GetMemberById(Number(member?.ID));
    if (res) {
      setMemberID(res);
    }
  };

 

  const onFinish = async (values: ReviewInterface) => {
    values.MemberID = MemberID?.ID
    values.RateID = userRating
    values.Companion = buttonName
    values.Comment = reviewText
    values.Image = profile?.thumbUrl;

    let res = await CreateReview(values);
    console.log('values = ', values)
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/SucessReview");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  console.log('image = ',profile?.thumbUrl)

 
  const values = {
    Companion: 'Couples',
    Comment: 'cfghdt',
    Image: profile ? profile.thumbUrl : undefined, // ตรวจสอบว่ามีรูปภาพหรือไม่
    MemberID: 0,
    RateID: 4
  };
  


  useEffect(() => {
    getMemberById();
  }, []);

  const getBookingById = async () => {
    let res = await GetBookingById(Number(1));
    if (res) {
      setFirstName(res.Adult)
    }
  };
  getBookingById();

  const [firstName, setFirstName] = useState<string | undefined>(undefined);


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

        setButtonName(buttonName);
        if (key === buttonName) {
          updatedButtonTypes[key as keyof typeof buttonTypes] = 'primary';
        } else {
          updatedButtonTypes[key as keyof typeof buttonTypes] = 'default';
        }
      }
      return updatedButtonTypes;
    });
  };




  return (
    <div>
      <div>
        <Taskbar />
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
        <button className='submit' onClick={() => onFinish(values) } >
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
            <Rate
              className="large-rate"
              tooltips={desc}
              onChange={handleRatingChange}
              value={userRating} />
            {userRating ? <span className="ant-rate-text">{desc[userRating - 1]}</span> : ''}
            <div className="body4">Who did you go with?</div>
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
            <TextArea placeholder="Write your review. The views were amazing. We took so many photos!..." rows={4}
              value={reviewText} // กำหนดค่าใน TextArea จาก state
              onChange={(e) => setReviewText(e.target.value)} />
          </Form.Item>

          <Form.Item label="Upload Image" valuePropName="fileList" name='Image' getValueFromEvent={normFile}>
            <Upload  maxCount={3} multiple={false}  listType="picture-card">
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

