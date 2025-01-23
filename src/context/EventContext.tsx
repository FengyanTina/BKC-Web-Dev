import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../configs/firebaseConfig"; // Ensure this points to your Firebase config
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from "firebase/firestore";

// Define the shape of an event
interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  description?: string;
  location?: string;
  allDay?: boolean;
  repeatCount?: number;
}

// Define the shape of the context
interface EventsContextType {
  events: CalendarEvent[];
  addEvent: (event: CalendarEvent) => Promise<void>;
  updateEvent: (event: CalendarEvent) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  fetchEvents: () => Promise<void>;
}

// Create the context
const EventsContext = createContext<EventsContextType | undefined>(undefined);

// Provider component
export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Fetch events from Firestore
  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const fetchedEvents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CalendarEvent[];
      setEvents(fetchedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Add a new event to Firestore
  const addEvent = async (event: CalendarEvent) => {
    try {
      const docRef = await addDoc(collection(db, "events"), event);
      setEvents((prevEvents) => [...prevEvents, { ...event, id: docRef.id }]);
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Update an event in Firestore
  const updateEvent = async (event: CalendarEvent) => {
    try {
        const { id, ...eventData } = event; // Exclude `id`
        const eventRef = doc(db, "events", id);
        await updateDoc(eventRef, eventData);
      setEvents((prevEvents) =>
        prevEvents.map((e) => (e.id === event.id ? { ...e, ...event } : e))
      );
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  // Delete an event from Firestore
  const deleteEvent = async (id: string) => {
    try {
      await deleteDoc(doc(db, "events", id));
      setEvents((prevEvents) => prevEvents.filter((e) => e.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent, fetchEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

// Hook to use Events Context
export const useEvents = (): EventsContextType => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};
