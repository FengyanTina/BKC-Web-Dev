import { BaseModel } from "./BaseModel";
import { Step } from "./Step";

export interface TextSectionWithStepsModel extends BaseModel {
    subtitle?: string; 
    buttonLink?:string;
    buttonText?:string;
    images: string | string[]; 
    steps?: Step[]; 
    showStepsLink?:boolean;
    links?:  LinkModel[];
    showAllAsFeatured?: boolean;
    linkSubtitle?: string;
  
   startTime?:Date;
   endTime?:Date;
   location?:string;
   showSocialIcons?:boolean

    
    };
    interface LinkModel {
        label: string; // The text displayed for the link
        url: string;   // The URL of the link
      }