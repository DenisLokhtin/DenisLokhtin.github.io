import React, { useContext, useEffect, useState } from "react";
import getMonth from "../../utils/getMonth";
import Month from "../../components/Month/Month";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import GlobalContext from "../../context/GlobalContext";
import "./Mainpage.css";
import EventModal from "../../components/EventModal/EventModal";

const MainPage = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, setMonthIndex, showEventModal } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("index"));
    if (localData) {
      setMonthIndex(localData);
    }
  }, []);

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
