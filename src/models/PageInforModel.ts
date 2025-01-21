import { BaseModel } from "./BaseModel";

export interface PageInforModel extends BaseModel {
    category?: string;
    subtitle?: string;
    linkSubtitle?: string;
    buttonText?: string;
   startTime?:Date;
   endTime?:Date;
   location?:string;
   buttonLink?:string;
   links?: LinkModel[];
   showSocialIcons?:boolean
  }

  interface LinkModel {
    label: string; // The text displayed for the link
    url: string;   // The URL of the link
  }