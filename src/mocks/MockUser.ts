import { User, UserCategory } from "../models/User";

export const mockTeamLeader: User = {
    name:"David",
    userId: "12345",
    category: UserCategory.TeamLeader,
    permissions: {
      canEditPages: false,
      canViewPages: true,
      canEditSchedules: true,
      canViewSchedules: true
    }
  };
  export const mockAdmin: User = {
    name:"Johana",
    userId: "12346",
    category: UserCategory.Admin,
    permissions: {
      canEditPages: true,
      canViewPages: true,
      canEditSchedules: true,
      canViewSchedules: true
    }
  };
  
  export const mockTeamMember: User = {
    name:"Johana",
    userId: "12346",
    category: UserCategory.TeamMember,
    permissions: {
      canEditPages: false,
      canViewPages: true,
      canEditSchedules: false,
      canViewSchedules: true
    }
  };