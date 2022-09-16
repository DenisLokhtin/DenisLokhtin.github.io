import React, { useContext, useEffect, useMemo, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { IconButton } from "@mui/material";
import dayjs from "dayjs";
import "./Sidebar.css";
import { SetIndex } from "../../../Actions/MonthIndex";

const Sidebar = () => {
  const { monthIndex, setMonthIndex, setShowEventModal } =
    useContext(GlobalContext);
  const [startDate, setStartDate] = useState(
    new Date(dayjs().year(), monthIndex)
  );
  useMemo(() => {
    setStartDate(new Date(dayjs().year(), monthIndex));
  }, [monthIndex]);

  const increaseIndex = () => {
    setMonthIndex(monthIndex + 1);
    SetIndex(monthIndex + 1);
  };

  const decreaseIndex = () => {
    setMonthIndex(monthIndex - 1);
    SetIndex(monthIndex - 1);
  };

  const now = dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY");

  useEffect(() => {
    const difference = () => {
      const currentDate = new Date(dayjs().year(), monthIndex);
      let diffMonth = dayjs(startDate).diff(dayjs(currentDate), "month");

      if (diffMonth !== 0) {
        setMonthIndex(monthIndex + diffMonth);
        SetIndex(monthIndex + diffMonth);
      }
    };

    difference();
  }, [startDate, monthIndex, setMonthIndex]);

  return (
    <div className="sidebar">
      <div className="calendar-title">
        <CalendarTodayIcon />
        <h2 className="title">Calendar</h2>
      </div>
      <div>
        <div className="navigation">
          <IconButton onClick={decreaseIndex}>
            <ChevronLeftIcon />
          </IconButton>
          <div className="date">{now}</div>
          <IconButton onClick={increaseIndex}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="MMMM yyyy "
          showMonthYearPicker
          className="datepicker"
        />
      </div>
      <div className="add-event" onClick={() => setShowEventModal(true)}>
        +
      </div>
    </div>
  );
};

export default Sidebar;
