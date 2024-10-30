export interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end: string;
    allDay: boolean;
    description?: string;
    location?: string;
    repeatCount?: number;
    selectedDays?: boolean[];
  }