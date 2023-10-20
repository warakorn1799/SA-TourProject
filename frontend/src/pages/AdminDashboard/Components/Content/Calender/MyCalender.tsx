import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './MyCalender.module.css'

function MyCalendar() {
    const [date, setDate] = useState<Date | null>(new Date());

    const handleDateChange = (newDate: Date | Date[]) => {
        if (newDate instanceof Date) {
            setDate(newDate);
        }
    };

    return (
        <div >
            <Calendar className={styles.size}
                onChange={handleDateChange as CalendarProps['onChange']} // แปลง handleDateChange เป็นชนิดของ onChange
                value={date}
            />
        </div>
    );
}

export default MyCalendar;
