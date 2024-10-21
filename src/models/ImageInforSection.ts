import { PageInforModel } from "./PageInforModel";


export interface ImageInforSectionModel extends PageInforModel {
    inforSectionId:string;
     images?: string | string[]; // Accept either a single string or an array of strings for images
     
     imageLeft?:boolean;
   }