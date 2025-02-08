import { BaseModel } from "./BaseModel";


export interface CardTextSectionModel extends BaseModel {
    category?: string;
    subtitle?: string;
    linkSubtitle?: string;
    buttonText?: string;
   start?:Date;
   end?:Date;
   location?:string;
   buttonLink?:string;
  showStepsLink?:boolean;
   links?: LinkModel[];
   showSocialIcons?:boolean;
   maxLines?:number;
  }

  interface LinkModel {
    label: string; // The text displayed for the link
    url: string;   // The URL of the link
  }