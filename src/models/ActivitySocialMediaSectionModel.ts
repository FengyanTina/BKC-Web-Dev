import { BaseModel } from "./BaseModel";
import { EventCategory } from "./Event";
import { ImageGallaryItemData } from "./ImageGallaryItemData";

export interface ActivitySocialMediaScetionCardModel extends BaseModel {
    inforSectionId:string;
    subtitle?: string;
    category?:EventCategory;
    images?: ImageGallaryItemData[]; // Accept either a single string or an array of strings for images   
  }