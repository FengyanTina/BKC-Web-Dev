import React, { createContext, useState, useContext, useEffect } from "react";
import { CalendarEvent } from "../models/CalendarEvent";
import { INITIAL_EVENTS } from "../components/calendars/EventScheduleCalendar";
import { generateRepeatEvents } from "../utils/GenerateRepeatEvent";

// Define the CalendarEvent interface if you haven't already


interface EventScheduleContextType {
  currentEvents: CalendarEvent[];
  selectedEvent: CalendarEvent | null;
  isModalOpen: boolean;
  isDetailModalOpen: boolean;
  isEditing: boolean;
  isConfirmDeleteOpen: boolean;
  handleDelete: (event: CalendarEvent) => void;
  handleCloseConfirmDelete: () => void;
  handleConfirmDelete: () => void;
  handleDateSelect: (selectInfo: any) => void;
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEdit: (event: CalendarEvent) => void;
  handleSaveEvent: () => void;
}

const EventScheduleContext = createContext<EventScheduleContextType | undefined>(undefined);

// Create the provider component
export const EventScheduleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isConfirmDeleteOpen, setConfirmDeleteOpen] = useState<boolean>(false);
  const getStoredEvents = (): CalendarEvent[] => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : INITIAL_EVENTS;
  };
  const saveEventsToLocalStorage = (events: CalendarEvent[]) => {
    localStorage.setItem("events", JSON.stringify(events));
  };
  const [currentEvents, setCurrentEvents] = useState<CalendarEvent[]>(
    getStoredEvents().length > 0 ? getStoredEvents() : INITIAL_EVENTS
  );
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
      const updatedEvents = currentEvents.filter((e) => e.id !== selectedEvent.id);
      setCurrentEvents(updatedEvents);
      setConfirmDeleteOpen(false);
      setSelectedEvent(null);
      saveEventsToLocalStorage(updatedEvents);
    }
  };

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

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(currentEvents));
  }, [currentEvents]);

  return (
    <EventScheduleContext.Provider
      value={{
        currentEvents,
        selectedEvent,
        isModalOpen,
        isDetailModalOpen,
        isEditing,
        isConfirmDeleteOpen,
        handleDelete,
        handleCloseConfirmDelete,
        handleConfirmDelete,
        handleDateSelect,
        handleFieldChange,
        handleEdit,
        handleSaveEvent,
      }}
    >
      {children}
    </EventScheduleContext.Provider>
  );
};

// Custom hook to use the EventScheduleContext
export const useEventSchedule = () => {
  const context = useContext(EventScheduleContext);
  if (!context) {
    throw new Error(
      "useEventSchedule must be used within a EventScheduleProvider"
    );
  }
  return context;
};
