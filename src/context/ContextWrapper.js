import React, {useEffect, useReducer, useState,} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = props => {
    const savedEventsReducer = (state, {type, payload}) => {
        switch (type) {
            case "push":
                return [...state, payload];
            case "update":
                return state.map((evt) =>
                    evt.id === payload.id ? payload : evt
                );
            case "delete":
                return state.filter((evt) => evt.id !== payload.id);
            default:
                throw new Error();
        }
    };

    const initEvents = () => {
        const storageEvents = localStorage.getItem("savedEvents");
        return storageEvents ? JSON.parse(storageEvents) : [];
    };

    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer,
        [],
        initEvents
    );

    useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);

    return (
        <GlobalContext.Provider
            value={{
                monthIndex,
                setMonthIndex,
                showEventModal,
                setShowEventModal,
                dispatchCalEvent,
                selectedEvent,
                setSelectedEvent,
                savedEvents,
                daySelected,
                setDaySelected,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;
