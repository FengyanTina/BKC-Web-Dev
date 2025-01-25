import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../configs/firebaseConfig"; // Ensure this points to your Firebase config
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { CalendarEvent } from "../models/CalendarEvent";

// Define the shape of an event

// Define the shape of the context
interface EventsContextType {
  events: CalendarEvent[];
  addEvent: (events: CalendarEvent) => Promise<void>;
  updateEvent: (event: CalendarEvent) => Promise<void>;
  deleteEvent: (event: CalendarEvent) => Promise<void>;
  fetchEvents: () => Promise<void>;
}

// Create the context
const EventsContext = createContext<EventsContextType | undefined>(undefined);

// Provider component
export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // Fetch events from Firestore
  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const fetchedEvents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CalendarEvent[];

      setEvents(fetchedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  // Add a new event to Firestore
  const addEvent = async (event: CalendarEvent) => {
    try {
       
            const docRef = await addDoc(collection(db, "events"), event);
            
            // Assign the docRef.id to the event
            const eventWithId = { ...event, id: docRef.id };
            
            // Update the document with the id
            await updateDoc(docRef, { id: docRef.id });
            
            // Update the state with the new event that includes the id
            setEvents((prevEvents) => [...prevEvents, eventWithId]);
          
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
  const deleteEvent = async (event: CalendarEvent) => {
    try {
      await deleteDoc(doc(db, "events", event.id));
      setEvents((prevEvents) => prevEvents.filter((e) => e.id !== event.id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider
      value={{ events, addEvent, updateEvent, deleteEvent, fetchEvents }}
    >
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
