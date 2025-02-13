
import { BaseModel } from "./BaseModel";

export interface HighlightEvent extends BaseModel{
    subtitle?: string;
    endTime?:string;
    startTime:string;
    location?: string;
    category: EventCategory;
    extraDetails?: string;
    image?: string | string[];
  }
export enum EventCategory {
    Service ='Service',
    Activity = 'Activity',
    Event ='Event',
    News='News',
    Meeting ='Meeting',
    SundayService = 'SundayService',
    PrayerService = 'PrayerService',
    SundaySchoole = 'SundaySchoole',
    BaptismService='Baptisim',
    YouthService = 'YouthGroup',
    BibleStudy = 'BibleStudy',
    WorshipService = 'WorshipService',
    HomeGroup='HomeGroup',
    Groups = "Groups",
    PrayerMeeting ='PrayerMeeting',
    MemeberMeeting ='MemberMeeting',
    SocialMedia ='SocialMedia'
  }