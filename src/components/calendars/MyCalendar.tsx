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

interface CustomEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  description?: string;
  location?: string;
  repeatCount?: number; // Number of times to repeat
  selectedDays?: boolean[];
}

let eventGuid = 0;
export function createEventId(): string {
  return String(eventGuid++);
}

// Retrieve events from localStorage
const getStoredEvents = (): CustomEvent[] => {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
};
const saveEventsToLocalStorage = (events: CustomEvent[]) => {
  localStorage.setItem("events", JSON.stringify(events));
};

export const INITIAL_EVENTS: CustomEvent[] = [
  {
    id: createEventId(),
    title: "All-day event",
    start: new Date().toISOString().split("T")[0], // Today (e.g., "2024-10-24")
    end: new Date().toISOString().split("T")[0], // Same day for all-day event
    description: "This is an all-day event.",
    allDay: true,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: new Date().toISOString().split("T")[0] + "T12:00:00", // Today at 12:00
    end: new Date().toISOString().split("T")[0] + "T13:00:00", // Today at 13:00
    description: "This is a timed event.",
    allDay: false,
  },
];

const MyCalendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<CustomEvent[]>(
    getStoredEvents()
  );
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { currentDevUser: currentUser } = useAuth();
  const [isConfirmDeleteOpen, setConfirmDeleteOpen] = useState<boolean>(false);

  const handleDelete = (event: CustomEvent) => {
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

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setSelectedEvent((prev) => {
        if (!prev) return null;

        if (name.startsWith('day_')) {
            const dayIndex = parseInt(name.split('_')[1], 10);
            const updatedDays = [...(prev.selectedDays || Array(7).fill(false))]; 
            updatedDays[dayIndex] = checked; 
            return { ...prev, selectedDays: updatedDays };
        }
        return { ...prev, [name]: type === 'checkbox' ? checked : value }; 
    });
};

  const handleEdit = (event: CustomEvent) => {
    setSelectedEvent({ ...event });
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      const updatedEvents = currentEvents.map((event) =>
        event.id === selectedEvent.id ? { ...event, ...selectedEvent } : event
      );

      const newEvents = generateRecurringEvents(selectedEvent);
      setCurrentEvents([...updatedEvents, ...newEvents]);
      setIsModalOpen(false);
      setSelectedEvent(null);
      saveEventsToLocalStorage([...updatedEvents, ...newEvents]);
    }
  };

  const generateRecurringEvents = (event: CustomEvent): CustomEvent[] => {
    const recurringEvents: CustomEvent[] = [];
    const { repeatCount, selectedDays, start } = event;

    const startDate = new Date(start);
    if (repeatCount)
      for (let i = 0; i < repeatCount; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i * 7); // Increment by 7 days for each occurrence

        selectedDays?.forEach((isSelected, index) => {
          if (isSelected) {
            const newEvent: CustomEvent = {
              ...event,
              id: String(new Date().getTime() + index), // Ensure unique ID
              start: currentDate.toISOString(), // Adjust this as necessary for your logic
              end: currentDate.toISOString(), // You might want to adjust the end date
            };
            recurringEvents.push(newEvent);
          }
        });
      }
    return recurringEvents;
  };


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

  const handleDetailOnTable = (clickInfo: CustomEvent) => {
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
      <h1>MyCalendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        selectable={true}
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
        currentUser={currentUser}
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
      {/* <EventForm onClose={handleCloseModal} onSave={handleSaveEvent} open={isModalOpen} isEditing={isEditing} /> */}
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

export default MyCalendar;
