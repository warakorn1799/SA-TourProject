import './submit.css';
import './body.css';
import Taskbar from '../Home/component/Header/Headers';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { Form, Input, Upload, } from 'antd';
import { GetTourist_attractionsById } from '../../services/http/tourAttractionService';
import { GetPackageById } from '../../services/http/packageService';
import { ReviewInterface } from '../../interfaces/IReview';
import { ImageUpload } from '../../interfaces/IUpload';
import { CreateReview } from '../../services/http/reviewService';
import { GetRateById } from '../../services/http/rateService';
import { RateInterface } from '../../interfaces/IRate';
import { GetMemberById } from '../../services/http/memberService';
import { MemberInterface } from '../../interfaces/IMember';




const { TextArea } = Input;

const desc = ['Terrible', 'Poor', 'Average', 'Very good', 'Excellent'];

function Review() {

  const reviewvalue = {
    Companion: '',
    Comment: '',
    Image: '',
    MemberID: 0,
    RateID: 0
  };
    
  const navigate = useNavigate();

  const [review, setReview] = useState<ImageUpload>()

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setReview(e?.fileList[0]);
    return e?.fileList;
  };




  const submit = async (values: ReviewInterface) => {
    let res = await CreateReview(values);
    values.Image = review?.thumbUrl;
    values.RateID = rate?.ID;
    values.MemberID = member?.ID;
    console.log('r=', rate?.ID);
    console.log('m=', member?.ID);
    console.log('i=', review?.thumbUrl);
  };

  useEffect(() => {
    getRateById();
    getMemberById();
  }, []);


  const getRateById = async () => {
    let res = await GetRateById(Number(1));
    if (res) {
      setRate(res);
    }
  };

  const getMemberById = async () => {
    let res = await GetMemberById(Number(1));
    if (res) {
      setMember(res);
    }
  };


  const [rate, setRate] = useState<RateInterface>();
  const [member, setMember] = useState<MemberInterface>();

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

  const [value, setValue] = useState(0);

  const getPackageById = async () => {
    let res = await GetPackageById(Number(1));
    if (res) {
      setName(res.Name)
    }
  };

  const getTourist_attractionsById = async () => {
    let res = await GetTourist_attractionsById(Number(1));
    if (res) {
      setLocation(res.Location)
    }
  };

  getTourist_attractionsById();
  const [location, setLocation] = useState<string | undefined>(undefined);

  getPackageById();
  const [name, setName] = useState<string | undefined>(undefined);




  return (
    <div>
      <div>
        <Taskbar />
      </div>
      <div className="review">
        Review
        <div className='fram'>
          <div style={{ marginTop: 25 }}>
            <img src='Rectangle 73.png'></img>
          </div>
          <div className='review3'>
            {name}
          </div>
          <div className='review4'>
            <img src='Rectangle 33.png'></img>
            {location}
          </div>


        </div>
        <button className='submit' onClick={() => submit(reviewvalue,)}>
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
