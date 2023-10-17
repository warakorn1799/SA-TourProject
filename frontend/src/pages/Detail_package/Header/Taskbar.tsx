import { UserOutlined ,CaretDownOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import './taskbar.css';
import home from '../assets/home.png';
import Review from '../assets/Review.png';
import Exploredestinations from '../assets/Explore destinations.png';
import ContactUs from '../assets/Contact Us.png';
import โลโก้ from '../assets/โลโก้.png';

function Taskbar() {

    return( 
        <header>
                <nav>
                    <div className='left'>
                        <div className="logo">
                            <img style={{width: '40px', height: '40px' }}src= {โลโก้}/>
                            <a href="#Tour in Thailand"> Tour in Thailand </a>
                        </div>
                    </div>

                    <ul>
                        <li className="Image">
                            <img style={{width: '20px', height: '20px'}} src={home} /> 
                            <img style={{width: '20px', height: '20px', position: 'absolute', marginLeft: '80px', top: '23px' }} src={Exploredestinations} />
                            <img style={{width: '20px', height: '20px', position: 'absolute', marginLeft: '290px', top: '23px' }} src={Review} />
                            <img style={{width: '28px', height: '28px', position: 'absolute', marginLeft: '390px', top: '20px' }} src={ContactUs} />
                        </li>

                        <li> <a href="/">Home</a></li>
                        <li> <a href="#Explore destinations">Explore destinations</a></li>
                        <li> <a href="#Review">Review</a></li>
                        <li> <a href="/Contact">Contact Us</a></li>
                        <Avatar src= "./cat2.jpg" alt= 'phoflie' size={45} icon={<UserOutlined />} className="avatar" />
                     
                        <div className="Menu">
                            <button className="dropbtn"> <CaretDownOutlined /></button>
                            <div className="Menu-content">
                                <a href="/">Home</a>
                                <a href="Review">Review </a>
                                <a href="My Booking">My Booking</a>
                                <a href="/Contact">Contact Us</a>
                                <a href="Log Out">Log Out</a>

                            </div>                               
                        </div>
                    </ul>
                </nav>
            
        </header>       
    
    )
}
export default Taskbar