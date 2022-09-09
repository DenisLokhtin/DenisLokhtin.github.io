import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCalEvent: ({}) => {},
    savedEvents: [],
    daySelected: null,
    setDaySelected: () => {},
});

export default GlobalContext;
