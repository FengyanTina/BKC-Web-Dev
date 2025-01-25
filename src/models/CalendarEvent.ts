export interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end: string;
    allDay: boolean;
    description?: string;
    location?: string;
    showOnCommingEvent?:boolean;
    showOnNews?:boolean;
    repeatCount?: number;
    selectedDays?: boolean[];
    imgUrl?:string;
  }

  