import React, {useContext} from 'react';
import './Day.css';
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext";

const Day = ({day}) => {
    const {monthIndex} = useContext(GlobalContext);
    const stylesNormal = ['day-card'];
    const stylesOtherMonth = ['day-card', 'other-Month'];
    console.log(day)

    const print = () => {
        if (dayjs(new Date(dayjs().year(), monthIndex)).format('M') - 1 === day.$M) {
            return (
                <div className={stylesNormal.join(' ')}>
                    <div>{dayjs(day.$d).format('dddd')}</div>
                    <div>{dayjs(day.$d).format('D')}</div>
                </div>
            )
        }
        else if(dayjs(new Date(dayjs().year(), monthIndex)).format('M') - 1 !== day.$M) {
            return (
                <div className={stylesOtherMonth.join(' ')}>
                    <div>{dayjs(day.$d).format('ddd')}</div>
                    <div>{dayjs(day.$d).format('D')}</div>
                </div>
            )
        }
    }

    return print();
};

export default Day;