import './SucessReview.css';
import Taskbar from '../Home/component/Header/Headers';
import { PackageInterface } from '../../interfaces/IPackage';
import { GetPackageById } from '../../services/http/packageService';
import { GetBookingById } from '../../services/http/bookingService';
import { BookingInterface } from '../../interfaces/IBooking';
import { useEffect, useState } from "react";
import { GetReviewByPackage } from '../../services/http/reviewService'; // นำเข้าฟังก์ชันเรียก API
import { useNavigate } from 'react-router-dom'



function SucessReview() {

  const [BookingID, getBookingID] = useState<BookingInterface | undefined>(undefined);
  const [packageId, setPackageID] = useState(Number); // รูปแบบ packageId ที่คุณต้องการ
  const navigate = useNavigate();



  const [averageRate, setAverageRate] = useState(Number);

  const fetchAverageRate = async () => {

    const response = await GetReviewByPackage(Number(packageId));
    if (response) {
      console.log("API Response:", response); // แสดงข้อมูลที่คืนมาจาก API ในคอนโซล

      if (response.data && response.data.averageRate) {
        setAverageRate(response.data.averageRate);
      } else {
        console.error("API Response ไม่มีค่าเฉลี่ย RateID");
      }
    } else {
      console.error("ไม่พบการตอบรับจาก API");
    }

  };


  const getBookingById = async () => {
    let res = await GetBookingById(Number(1));
    if (res) {
      getBookingID(res)
    }
  };

  const getPackageById = async () => {
    let res = await GetPackageById(Number(1));
    if (res) {
      setPackageID(res)
    }
  };


  useEffect(() => {
    getBookingById();
    getPackageById();
    fetchAverageRate();

  }, []);

  setTimeout(function () {
    navigate("/");
    }, 2000);




  useEffect(() => {

  }, []);


  return (
    <div>
      <div>
        <Taskbar />
      </div>
      <div className="title">
        Review
      </div>
      <div>
        <img src='ขอบคุณ.png' className='logo'></img>
        <div className='thankyou'>Thank you for sharing your experience with us!</div>
      </div>
      <div style={{ width: 1289.49, marginTop: 600, marginLeft: 80, height: 5.03, boxShadow: '0px 4px 4px #C7C7C7', border: '1px #CCCCCC solid' }}></div>
      <div className='title2'>
      </div>
      <div>

      </div>
      <div className='contenner'>
        
        <div>

        </div>
        <div className='rate'> </div>

      </div>

    </div>
  );
}

export default SucessReview;
