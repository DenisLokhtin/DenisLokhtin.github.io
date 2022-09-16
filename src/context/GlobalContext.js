import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 8,
  setMonthIndex: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: () => {},
  savedEvents: [],
  daySelected: null,
  setDaySelected: () => {},
});

export default GlobalContext;
