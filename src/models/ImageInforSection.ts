import { CardTextSectionModel } from "./CardTextSectionModel";


export interface ImageInforSectionModel extends CardTextSectionModel {
    inforSectionId:string;
     images?: string | string[]; 
     imageLeft?:boolean;
   }