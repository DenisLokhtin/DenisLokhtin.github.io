import React, {useContext, useEffect, useState} from 'react';
import './Day.css';
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext";

const Day = ({day}) => {
    const [dayEvents, setDayEvents] = useState([]);
    const {monthIndex} = useContext(GlobalContext);
    const stylesNormal = ['day-card'];
    const stylesOtherMonth = ['day-card', 'other-Month'];

    const {
        savedEvents,
        setSelectedEvent,
    } = useContext(GlobalContext);

    useEffect(() => {
        // console.log(dayjs(evt.date).format('MM-DD-YY'), day.format('MM-DD-YY'))
        const events = savedEvents.filter(
            (evt) =>
                dayjs(evt.date).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayEvents(events);
    }, [savedEvents, day]);

    const print = () => {
        if (dayjs(new Date(dayjs().year(), monthIndex)).format('M') - 1 === day.$M) {
            return (
                <div className={stylesNormal.join(' ')}>
                   <div className='date-card'>
                       <div>{dayjs(day.$d).format('dddd')}</div>
                       <div>{dayjs(day.$d).format('D')}</div>
                   </div>
                    {dayEvents.map((evt, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedEvent(evt)}
                            className='event-in-day'
                        >
                            {evt.title}
                        </div>
                    ))}
                </div>
            )
        } else if (dayjs(new Date(dayjs().year(), monthIndex)).format('M') - 1 !== day.$M) {
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