import { BaseModel } from "./BaseModel";

export interface Step extends BaseModel {
    link?: string; // Optional link if needed
    linkName?:string;
  }