import { BaseModel } from "./BaseModel";
import { Step } from "./Step";

export interface TextSectionWithStepsModel extends BaseModel {
    subtitle?: string; 
    buttonLink?:string;
    images: string | string[]; 
    steps?: Step[]; 
    showStepsLink?:boolean;
    links?:  LinkModel[];
    showAllAsFeatured?: boolean;
    };
    interface LinkModel {
        label: string; // The text displayed for the link
        url: string;   // The URL of the link
      }