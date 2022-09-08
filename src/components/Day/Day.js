import React from 'react';
import './Day.css';
import dayjs from "dayjs";

const Day = ({day}) => {
    return (
        <div className='day-card'>
            <div>{dayjs(day.$d).format('ddd')}</div>
            <div>{dayjs(day.$d).format('D')}</div>
        </div>
    )
};

export default Day;