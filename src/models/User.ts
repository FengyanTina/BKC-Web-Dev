// src/types/User.ts

export enum UserCategory {
    Admin = "admin",
    Member = "member",
    TeamLeader = "teamLeader",
    TeamMember = "teamMember"
  }
  
  export interface Permission {
    canEditPages: boolean;
    canViewPages: boolean;
    canEditSchedules: boolean;
    canViewSchedules: boolean;
  }
  
  export interface User {
    name:string;
    userId: string;
    category: UserCategory;
    permissions: Permission;
  }
  