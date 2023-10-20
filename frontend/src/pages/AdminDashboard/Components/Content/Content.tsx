import React from 'react';
import styles from './Content.module.css';
import users from './assets/user.png';
import bookings from './assets/booking.png';
import packages from './assets/package.png';
import MyCalendar from './Calender/MyCalender';

function Content() {
    return (
        <div className={styles.content} >
            <div className={styles.grit_item}>
                <div className={styles.grit_user}>
                    <img src={users} alt="user" />
                    <br /><br /><a className={styles.name} >User</a>
                    <br /><br /><a className={styles.number}>0</a>
                </div>
                <div className={styles.grit_booking}>
                    <img src={bookings} alt="booking" />
                    <br /><br /><a className={styles.name}>Booking</a>
                    <br /><br /><a className={styles.number}>0</a>
                </div>
                <div className={styles.grit_package}>
                    <img src={packages} alt="package" />
                    <br /><br /><a className={styles.name}>Tour package</a>
                    <br /><br /><a className={styles.number}>0</a>
                </div>              
            </div>
            <div className={styles.calenders}> <MyCalendar/></div>
        </div>
    );
}
export default Content;