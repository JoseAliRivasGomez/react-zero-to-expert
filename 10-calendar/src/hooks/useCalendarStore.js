import { useSelector, useDispatch } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
  
    const {events, activeEvent} = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) => {
        


        if (calendarEvent._id){ //Update
        dispatch(onUpdateEvent({...calendarEvent}));
        }else{ //Create
            dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
        }
    }

    const startDeletingEvent = () => {


        
        dispatch(onDeleteEvent());
    }

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, //null = false, object = true
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }

}
