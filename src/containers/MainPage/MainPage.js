import React, {useContext, useEffect, useState} from 'react';
import getMonth from "../../middlewares/getMonth";
import Month from "../../components/Month/Month";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
import './Mainpage.css'


const MainPage = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    useEffect(() => {
        setMonthIndex(dayjs().format('M') - 1);
        const localData = JSON.parse(localStorage.getItem('index'));
        setMonthIndex(localData)
    }, []);

    return (
        <div className='container'>
            <Sidebar/>
            <Month month={currentMonth}/>
        </div>
    );
};

export default MainPage;