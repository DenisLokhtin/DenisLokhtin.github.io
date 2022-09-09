import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: () => {},
    showEventModal: false,
    setShowEventModal: () => {},
    dispatchCalEvent: ({ type, payload }) => {},
    savedEvents: [],
});

export default GlobalContext;
