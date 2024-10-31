import "./calendar.css";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import svLocale from "@fullcalendar/core/locales/sv";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "./EventScheduleSidbarTable";
import ConfirmDeleteDialog from "../forms/ConfirmDeleteDialog";
import ScheduleEventDetailDialog from "../forms/ScheduleEventDetailDialog";
import EventAddAndEditForm from "../forms/EventAddAndEditForm";
import { CalendarEvent } from "../../models/CalendarEvent";

import { createEventId } from "../../hooks/GenerateEventId";
import { generateRepeatEvents } from "../../utils/GenerateRepeatEvent";




const getStoredEvents = (): CalendarEvent[] => {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
};
const saveEventsToLocalStorage = (events: CalendarEvent[]) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const INITIAL_EVENTS: CalendarEvent[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: new Date().toISOString().split("T")[0],
    end: new Date().toISOString().split("T")[0],
    description: "This is an all-day event.",
    allDay: true,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: new Date().toISOString().split("T")[0] + "T12:00:00",
    end: new Date().toISOString().split("T")[0] + "T13:00:00",
    description: "This is a timed event.",
    allDay: false,
  },
];

const EventScheduleCalendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>(
    getStoredEvents().length > 0 ? getStoredEvents() : INITIAL_EVENTS
  );
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { currentDevUser } = useAuth();
  const [isConfirmDeleteOpen, setConfirmDeleteOpen] = useState<boolean>(false);

  const handleDelete = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setConfirmDeleteOpen(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDeleteOpen(false);
    setSelectedEvent(null);
  };

  const handleConfirmDelete = () => {
    if (selectedEvent) {
      const updatedEvents = currentEvents.filter(
        (e) => e.id !== selectedEvent.id
      );
      setCurrentEvents(updatedEvents);
      setConfirmDeleteOpen(false);
      setSelectedEvent(null);
      saveEventsToLocalStorage(updatedEvents);
    }
  };

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(currentEvents));
  }, [currentEvents]);

  const handleDateSelect = (selectInfo: any) => {
    setSelectedEvent({
      id: "",
      title: "",
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      description: "",
      location: "",
      allDay: selectInfo.allDay,
    });

    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    setSelectedEvent((prev) => {
      if (!prev) return null;
      if (name === "repeatCount") {
        const newRepeatCount = Number(value);

        const eventDate = new Date(prev.start); // Assuming start is in ISO format
        const eventDay = eventDate.getDay(); // 0-Sunday, 1-Monday, ..., 6-Saturday

        const updatedDays = Array(7).fill(false); // Start with all days unchecked
        updatedDays[eventDay] = true; // Automatically check the event's scheduled day

        return {
          ...prev,
          repeatCount: newRepeatCount,
          selectedDays: updatedDays,
        };
      }

      // Handle other fields
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleEdit = (event: CalendarEvent) => {
    setSelectedEvent({
      ...event,
      repeatCount: 0,
    });
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      const repeatCount = selectedEvent.repeatCount ?? 0;
      const startDate = new Date(selectedEvent.start);
      const endDate = new Date(selectedEvent.end);
      const allDay = selectedEvent.allDay;
      const updatedSelectedEvent = {
        ...selectedEvent,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        allDay: allDay,
      };
      const isUpdatingExisting = currentEvents.some(
        (event) => event.id === updatedSelectedEvent.id
      );

      let updatedEvents;
      if (isUpdatingExisting) {
        updatedEvents = currentEvents.map((event) =>
          event.id === updatedSelectedEvent.id
            ? { ...event, ...updatedSelectedEvent }
            : event
        );
      } else {
        updatedEvents = [
          ...currentEvents,
          { ...updatedSelectedEvent, id: String(new Date().getTime()) },
        ];
      }

      let newEvents: CalendarEvent[] = [];
      if (repeatCount > 0) {
        newEvents = generateRepeatEvents(
          updatedSelectedEvent,
          endDate,
          repeatCount
        );
      }

      const finalEvents = [...updatedEvents, ...newEvents];
      setCurrentEvents(finalEvents);
      setIsModalOpen(false);
      setSelectedEvent(null);
      saveEventsToLocalStorage(finalEvents);
    }
  };

//   const generateRecurringEvents = (
//     event:  CalendarEvent,
//     endDate: Date,
//     repeatCount: number
//   ): CalendarEvent[] => {
//     const recurringEvents: CalendarEvent[] = [];
//     const { selectedDays } = event;
//     const startDate = new Date(event.start || new Date().toISOString());

//     for (let i = 0; i < repeatCount; i++) {
//       const currentDate = new Date(startDate);
//       currentDate.setDate(startDate.getDate() + (i + 1) * 7);
//       selectedDays?.forEach((isSelected, index) => {
//         if (isSelected) {
//           const newEvent: CalendarEvent = {
//             ...event,
//             id: `${event.id}-${i}-${index}`, // Unique ID for each instance
//             start: currentDate.toISOString(), // Adjust this as necessary for your logic
//             end: new Date(
//               currentDate.getTime() + (endDate.getTime() - startDate.getTime())
//             ).toISOString(), // Set end time
//           };
//           recurringEvents.push(newEvent);
//         }
//       });
//     }

//     return recurringEvents;
//   };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const clickedEvent = currentEvents.find(
      (event) => event.id === clickInfo.event.id
    );
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setIsDetailModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsDetailModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDetailOnTable = (clickInfo: CalendarEvent) => {
    const clickedEvent = currentEvents.find(
      (event) => event.id === clickInfo.id
    );
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setIsDetailModalOpen(true);
    }
  };

  return (
    <div className="calendar-container">
     
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={currentEvents}
        editable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        locale={svLocale}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false, // 24-hour format
        }}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          omitZeroMinute: false,
          hour12: false, // 24-hour format
        }}
      />
      <Sidebar
        currentEvents={currentEvents}
        handleEdit={handleEdit}
        currentUser={currentDevUser}
        handleDelete={handleDelete}
        handleDetailOnTable={handleDetailOnTable}
      />
      <ConfirmDeleteDialog
        open={isConfirmDeleteOpen}
        onClose={handleCloseConfirmDelete}
        onConfirm={handleConfirmDelete}
        title={selectedEvent?.title}
      />
      <ScheduleEventDetailDialog
        event={selectedEvent}
        open={isDetailModalOpen}
        onClose={handleCloseModal}
      />
      <EventAddAndEditForm
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        selectedEvent={selectedEvent}
        isEditing={isEditing}
        handleFieldChange={handleFieldChange}
        handleSaveEvent={handleSaveEvent}
      />
    </div>
  );
};
function renderEventContent(eventInfo: EventContentArg) {
  return (
    <>
      <b>{eventInfo.timeText}</b> {/* Display event time */}
      <i>{eventInfo.event.title}</i> {/* Display event title */}
    </>
  );
}

export default EventScheduleCalendar;
