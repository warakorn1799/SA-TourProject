import React, { useEffect, useState } from 'react';
import styles from './Content.module.css';
import users from './assets/user.png';
import bookings from './assets/booking.png';
import packages from './assets/package.png';
import MyCalendar from './Calender/MyCalender';
import { GetMemberNumber } from '../../../../services/http/memberService';
import { GetBookingNumber } from '../../../../services/http/bookingService';
import { GetPackageNumber } from '../../../../services/http/packageService';

function Content() {
    useEffect(() => {
        getMemberNumber();
        getBookingNumber();
        getPackageNumber();
    }, []);

    const [membernumber, setMemberNumber] = useState<number | null>(0);
    const getMemberNumber = async () => {
        let res = await GetMemberNumber();
        if (res) {
            setMemberNumber(res);
        }
    };

    const [bookingnumber, setBookingNumber] = useState<number | null>(0);
    const getBookingNumber = async () => {
        let res = await GetBookingNumber();
        if (res) {
            setBookingNumber(res);
        }
    };

    const [packagenumber, setPackageNumber] = useState<number | null>(0);
    const getPackageNumber = async () => {
        let res = await GetPackageNumber();
        if (res) {
            setPackageNumber(res);
        }
    };

    return (
        <div className={styles.content} >
            <div className={styles.grit_item}>
                <div className={styles.grit_user}>
                    <img src={users} alt="user" />
                    <br /><br /><a className={styles.name} >User</a>
                    <br /><br /><a className={styles.number}>{membernumber}</a>
                </div>
                <div className={styles.grit_booking}>
                    <img src={bookings} alt="booking" />
                    <br /><br /><a className={styles.name}>Booking</a>
                    <br /><br /><a className={styles.number}>{bookingnumber}</a>
                </div>
                <div className={styles.grit_package}>
                    <img src={packages} alt="package" />
                    <br /><br /><a className={styles.name}>Tour package</a>
                    <br /><br /><a className={styles.number}>{packagenumber}</a>
                </div>
            </div>
            <div className={styles.calenders}> <MyCalendar /></div>
        </div>
    );
}
export default Content;