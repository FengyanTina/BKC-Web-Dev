import { BaseModel } from "./BaseModel";
import { Step } from "./Step";

export interface CardTextSectionModel extends BaseModel {
    category?: string;
    subtitle?: string;
    linkSubtitle?: string;
    buttonText?: string;
   startTime?:Date;
   endTime?:Date;
   location?:string;
   buttonLink?:string;
  steps?: Step[];
  showStepsLink?:boolean;
   links?: LinkModel[];
   showSocialIcons?:boolean
  }

  interface LinkModel {
    label: string; // The text displayed for the link
    url: string;   // The URL of the link
  }