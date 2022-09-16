import React, { useContext, useEffect, useState } from "react";
import getMonth from "../../utils/getMonth";
import Month from "../../components/Month/Month";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../../components/EventModal/EventModal";
import "./Mainpage.css";
import { GetIndex } from "../../Actions/MonthIndex";

const MainPage = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, setMonthIndex, showEventModal } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const localData = GetIndex("index");
    if (localData) {
      setMonthIndex(localData);
    }
  }, [setMonthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="container">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </>
  );
};

export default MainPage;
