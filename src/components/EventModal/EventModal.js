import React, {useContext, useState} from 'react';
import './EventModal.css'
import Overlay from "../UI/Overlay/Overlay";
import GlobalContext from "../../context/GlobalContext";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {Button, TextField} from "@mui/material";
import {TimePicker} from "@mui/x-date-pickers";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

const EventModal = () => {
    const {
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
    const [date, setDate] = useState(selectedEvent ? selectedEvent.date : "");
    const [time, setTime] = useState(selectedEvent ? selectedEvent.time : "");


    const handleSubmit = e => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            date,
            time,
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({type: "update", payload: calendarEvent});
        } else {
            dispatchCalEvent({type: "push", payload: calendarEvent});
        }

        setShowEventModal(false);
    };

    return (
        <>
            <div className='event-modal'>
                <form>
                    <h3>Create event</h3>
                    <div>
                        <TextField
                            sx={{mt: 2}}
                            label="Add a title"
                            variant="outlined"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            sx={{mt: 2}}
                            label="Add a description"
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={date}
                                onChange={(data: TDate) => setDate(data)}
                                renderInput={(params) => <TextField {...params} required sx={{width: 235, mt: 2}}/>}
                            />
                            <TimePicker
                                label="Time"
                                value={time}
                                onChange={(data: TDate) => setTime(data)}
                                renderInput={(params) => <TextField {...params} sx={{width: 235, mt: 2}}/>}
                            />
                        </LocalizationProvider>
                    </div>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                        sx={{mt: 4}}
                        disabled={title.length === 0 || date.length === 0}
                    >
                        Save
                    </Button>
                </form>
            </div>
            <Overlay/>
        </>
    );
};

export default EventModal;