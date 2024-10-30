import { CalendarEvent } from "../models/CalendarEvent";



export const generateRecurringEvents = (
    event: CalendarEvent,
    endDate: Date, 
    repeatCount: number
  ): CalendarEvent[] => {
    const recurringEvents:  CalendarEvent[] = [];
    const { selectedDays } = event;
    const startDate = new Date(event.start || new Date().toISOString());

    for (let i = 0; i < repeatCount; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + (i + 1) * 7);
      selectedDays?.forEach((isSelected, index) => {
        if (isSelected) {
          const newEvent:  CalendarEvent = {
            ...event,
            id: `${event.id}-${i}-${index}`, // Unique ID for each instance
            start: currentDate.toISOString(), // Adjust this as necessary for your logic
            end: new Date(
              currentDate.getTime() + (endDate.getTime() - startDate.getTime())
            ).toISOString(), // Set end time
          };
          recurringEvents.push(newEvent);
        }
      });
    }

    return recurringEvents;
  };