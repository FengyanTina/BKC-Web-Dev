import { useEvents } from "../context/EventContext";

export const getCurrentWeek = () => {
    const { events } = useEvents();
    const today = new Date();
  
    // Get the day of the week (0 is Sunday, 1 is Monday, etc.)
    const currentDayOfWeek = today.getDay();
  
    // In Sweden, the week starts on Monday, so calculate the start of the week (Monday)
    const startOfWeek =
      today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);
  
    const daysInSwedish = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]; // Days of the week in Swedish
  
    

    // Generate the week as an array of objects with date and dayName
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today); // Create a new date object to avoid mutation
      date.setDate(startOfWeek + index); // Set the correct day for the week
  
      // Define date formatting options
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
      };
  
      // Format the date as "DD/MM"
      const formattedDate = date.toLocaleDateString("sv-SE", dateOptions);
    
      const dayEvents = events
      .filter((event) => {
        // Assuming event.date is in ISO format (YYYY-MM-DD)
        const eventDate = new Date(event.start);
        return (
          eventDate.getFullYear() === date.getFullYear() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getDate() === date.getDate()
        );
      })
      .map((event) => ({
        title: event.title,
        starTime: new Date(event.start).toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // Ensures 24-hour format
        }),
        endTime: new Date(event.end).toLocaleTimeString("sv-SE", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, // Ensures 24-hour format
          }),
      }));
  
      // Return both the formatted date and the corresponding day name in Swedish
      return {
        date: formattedDate,
     
        dayName: daysInSwedish[date.getDay()], // Get day name using current day of the week index 
        events: dayEvents,
      };
    });
  };
  
