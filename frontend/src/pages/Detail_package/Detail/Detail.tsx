import { Layout, Button } from 'antd';
import './Detail.css';
import './photo.css' ;
import { useParams, useNavigate } from 'react-router-dom';
import { ExclamationCircleOutlined ,CheckCircleOutlined} from '@ant-design/icons';
import {useState,useEffect} from "react";
import {GetPackageById} from "../../../services/http/packageService";
import {GetTourist_attractionsById} from "../../../services/http/tourAttractionService";
import { Tourist_attractionInterface } from "../../../interfaces/ITourist_attraction";
import { PackageInterface } from "../../../interfaces/IPackage";
import { TourAttraction_packageInterface } from "../../../interfaces/ITourattraction_package";
import {GetTourist_attractions_package, GetTourist_attractions_packageById} from "../../../services/http/tourAttractionPackageService";
import LoginPopup from '../../Home/component/Header/Components/LoginPopup';
import { member } from '../../Home/component/Header/Components/LoginPopup';


function Detail() {

   const { packageId } = useParams();
    useEffect(() => {
    if (packageId) {
        const packageIdNumber = parseInt(packageId, 10); // แปลง packageId เป็นตัวเลข
        GetPackage(packageIdNumber); // ส่งตัวเลข packageId ไปยัง GetPackage
        getTouristAttractions(packageIdNumber); // ส่งตัวเลข packageId ไปยัง getTouristAttractions
        console.log(packageIdNumber);
        console.log("Received packageId:", packageId);

    }
}, [packageId]);
    
      const [PackageName, setPackageName] = useState<string | undefined>(undefined);
      const [Highlights, setHighlights] = useState<string | undefined>(undefined);
      const [Pricechil, setPricechil] = useState<number | undefined>(undefined);
      const [Detail, setDetail] = useState<string | undefined>(undefined);
      const [Location, setLocation] = useState<string | undefined>(undefined);
      const [Map, setMap] = useState<string>("");
      const [Image1, setImage1] = useState<string>("");
      const [Image2, setImage2] = useState<string>("");
      const [Image3, setImage3] = useState<string>("");
      const [PackageID, setPackageID] = useState<number | undefined>(undefined);
      const [TouristAttractionsID, setTouristAttractionsID] = useState<number | undefined>(undefined);
      const [TouristattractionspackageById, setTouristattractionspackageById] = useState<number | undefined>(undefined);
      
    const GetPackage = async (id: Number | undefined) => {
        let res = await GetPackageById(Number(id));
        if (res) {
            setPackageID(res)
            setPackageName(res.Name);
            setHighlights(res.Highlights);
            setPricechil(res.Pricechil);
            setDetail(res.Detail);
        }
    };
    const getTouristAttractions = async (id: Number | undefined) => {
        let res = await GetTourist_attractionsById(Number(id));
        if (res) {
            setTouristAttractionsID(res)
            setLocation(res.Location);
            setMap(res.Map);
            setImage1(res.Image1);
            setImage2(res.Image2);
            setImage3(res.Image3);
        }
    };
    const getTouristattractionspackage = async (id: Number | undefined) => {
        let res = await GetTourist_attractions_packageById(id);
        if (res) {
            setTouristattractionspackageById(res.ID);
        }
      };
    

    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(() => {
        // เริ่มต้นที่ภาพแรกเมื่อคอมโพเนนต์ถูกโหลด
        showSlides(slideIndex);
    }, []);

    const prevImage  = () => {
        showSlides(slideIndex - 1); 
    };

    const nextImage  = () => {
        showSlides(slideIndex + 1);
    }

    const showSlides = (n: number) => {
        let i;
        let slides = document.getElementsByClassName("mySlides")  as HTMLCollectionOf<HTMLDivElement> ;
        if (n > slides.length) { n = 1; }
        if (n < 1) { n = slides.length ; }
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "block";
        setSlideIndex(n);
    };

    const navigate = useNavigate();
    useEffect(() => {
        const userIsLoggedIn = member ? true : false;
        setIslogin(userIsLoggedIn);
    }, [member])

    const [islogin, setIslogin] = useState(false);
    const [isLoginPopupOpen, setState] = useState(false);
    const successes = () => {
        setState(true);
    }
    const closePopup = () => {
        setState(false);
        setIslogin(false);
    };
    const toBooking = () => {
        if(!islogin){
            setState(true)  
        }
        else{
            navigate("/booking")
        }

    }

    return(
        <Layout>
            <div className="Layout1">
                <div className="row">
                    <h2 style={{margin: '65px 50px'}}> {PackageName} </h2>

                    <div className="side">
                        <div className="fakeimg" >
                        <iframe 
                            style={{zIndex: 1}}
                            width="100%"
                            height="300px"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src = {Map} >
                            </iframe>
                        </div>
                        <p style={{margin:'-25px',textAlign:'center'}}>{Location}</p>

                        <h3>What's included</h3>
                        <div className='included'>
                            <p><CheckCircleOutlined /> ค่าที่พัก </p>
                            <p><CheckCircleOutlined /> ค่ารถเดินทางตามโปรแกรม+คนขับ+น้ำมัน</p>
                            <p><CheckCircleOutlined /> ค่าธรรมเนียมเข้าชมตามรายการที่ระบุสำหรับนักท่องเที่ยวชาวไทย</p>
                            <p><CheckCircleOutlined /> อาหารสำหรับทุกมื้อ</p>
                            <p><CheckCircleOutlined /> น้ำดื่มระหว่างเดินทาง</p>
                            <p><CheckCircleOutlined /> ค่าประกันอุบัติเหตุในวงเงิน 1,000,000 บาท รักษาพยาบาล 500,000 บาท ตามเงื่อนไขของกรมธรรม์</p>
                            <p><ExclamationCircleOutlined /> ค่าตั๋วเครื่องบินไป-กลับ</p>
                            <p><ExclamationCircleOutlined /> ค่าทิปไกด์และคนขับรถ</p>
                            <p><ExclamationCircleOutlined /> ค่าธรรมเนียมเข้าชมสถานที่ท่องเที่ยว</p>
                            <p><ExclamationCircleOutlined /> ค่ามินิบาร์ในห้องพัก และค่าใช้จ่ายส่วนตัว เช่น ค่าโทรศัพท์ ค่าซักรีด เป็นต้น</p>
                            <p><ExclamationCircleOutlined /> ค่าใช้จ่ายและค่าอาหารที่นอกเหนือจากรายการระบุ</p>
                            <p><ExclamationCircleOutlined /> ภาษีมูลค่าเพิ่ม 7% และภาษีหัก ณ ที่จ่าย 3%</p>
                            <p><ExclamationCircleOutlined /> ค่าประกันภัยธรรมชาติ,ประกันชีวิตส่วนตัว</p>
                        </div>

                        <div className='price'>
                            <h4 style={{color:'#FC6130'}}>Start from</h4>
                            <h2 style={{margin:'-13px 0', fontSize: '56px', color:'#FC6130'}}>THB {Pricechil} </h2>
                        </div>

                    </div>

                    <div className="main">
                    <div className="fakeimg" style={{height:'550px',top:'-40px',position:'relative'}}>
                        <div className='ImageSlider'>
                            <div className="slideshow-container">

                                <div className="mySlides fade">   
                                <img src= {Image1} style={{position:'relative', top:'-26px', left:'-25px', width:'1050px', height: '550px', borderRadius: '15px'}} alt='Slide 1' />
                                </div>
                                

                                <div className="mySlides fade">
                                <img src= {Image2} style={{position:'relative', top:'-26px', left:'-25px', width:'1050px', height: '550px', borderRadius: '15px'}} alt='Slide 2' />
                                </div>

                                <div className="mySlides fade">
                                <img src= {Image3} style={{position:'relative', top:'-26px', left:'-25px', width:'1050px', height: '550px', borderRadius: '15px'}} alt='Slide 3' />
                                </div>
                                

                                <a className="prev" onClick={nextImage}>❮</a>
                                <a className="next" onClick={prevImage}>❯</a>
                                
                            </div>
                            </div>
                        </div>

                        <p style={{margin: '-29px 20px',fontFamily: 'Roboto' ,fontWeight: 700, fontSize: '14px'}}> Highlights </p>
                        
                        <p style={{margin: '10px 95px'}}> 
                            { Highlights }</p>  
                                        
                        <br/>
                        <h4 style={{marginTop: '-5px', marginLeft:'3px'}}> Package details </h4>
                        
                        <div className='detail'>
                            <a > {Detail} </a>  
                          
                            {islogin ? (
                                <div className='buttonTOBooking_frame'>
                                <Button className='buttonTOBooking' onClick={toBooking}>
                                    <a>Book Now</a>
                                </Button>
                                </div>
                            ) : (
                                <div className='buttonTOBooking_frame'>
                                <Button className='buttonTOBooking' onClick={() => setState(true)}>
                                    <a>Book Now</a>
                                </Button>
                                </div>
                            )}
                            
                            {isLoginPopupOpen && <LoginPopup onClose={closePopup} />}
                        
                        
                        </div> 
                    </div>
                </div>
            </div>

        </Layout>
    );
}
export default Detail