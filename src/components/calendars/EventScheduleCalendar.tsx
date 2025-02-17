import "./calendar.css";
import React, { useState } from "react";
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
import { generateRepeatEvents } from "../../utils/GenerateRepeatEvent";
import { useEvents } from "../../context/EventContext";
import { UserCategory } from "../../models/User";



const EventScheduleCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { currentDevUser } = useAuth();
  const { events, addEvent, deleteEvent, updateEvent } = useEvents();
  const [isConfirmDeleteOpen, setConfirmDeleteOpen] = useState<boolean>(false);
 const isAdmin = currentDevUser?.category === UserCategory.Admin;
 
  const handleDelete = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setConfirmDeleteOpen(true);
  };

  const handleCloseConfirmDelete = () => {
    setConfirmDeleteOpen(false);
    setSelectedEvent(null);
  };

  const handleConfirmDelete = () => {
    if (selectedEvent) deleteEvent(selectedEvent);

    setConfirmDeleteOpen(false);
    setSelectedEvent(null);
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

  const handleSaveEvent = async (imageUrl?: string) => {
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
        ...(imageUrl ? { imageUrl } : {}),
      };
      const isUpdatingExisting = events.some(
        (event) => event.id === updatedSelectedEvent.id
      );

      try {
        if (isUpdatingExisting) {
          // Call `updateEvent` from context to update the event
          await updateEvent(updatedSelectedEvent);
        } else {
          const newEvent = { ...updatedSelectedEvent }; // Firestore will generate `id`
          await addEvent(newEvent);
        }

        if (repeatCount > 0) {
          const newEvents = generateRepeatEvents(
            updatedSelectedEvent,
            endDate,
            repeatCount
          );
          for (const event of newEvents) {
            await addEvent(event); // Add each repeat event to Firestore
          }
        }
        setIsModalOpen(false);
        setSelectedEvent(null);
      } catch (error) {
        console.error("Error saving event:", error);
      }
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const clickedEvent = events.find(
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
    const clickedEvent = events.find((event) => event.id === clickInfo.id);
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
      setIsDetailModalOpen(true);
    }
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        selectable={isAdmin}
        // select={handleDateSelect}
        select={isAdmin ? handleDateSelect : undefined}
        events={events}
        editable={isAdmin}
        selectMirror={true}
        dayMaxEvents={1}
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
        height="100%" /* This makes the calendar take full height */
        contentHeight="auto" /* Adjusts height dynamically based on content */
        expandRows={true}
        longPressDelay={500} 
      />
      <Sidebar
        events={events}
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
        currentDevUser = {currentDevUser}
      />
    </div>
  );
};
function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="event-text">
      <b>{eventInfo.timeText}</b> {/* Display event time */}
      <i>{eventInfo.event.title}</i> {/* Display event title */}
    </div>
  );
}

export default EventScheduleCalendar;
