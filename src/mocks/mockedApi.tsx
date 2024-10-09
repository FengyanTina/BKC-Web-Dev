import { User } from "../models/User";
import { mockTeamLeader } from "./MockUser";

export const fetchUser = async (userId: string): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTeamLeader);
      }, 1000); // Simulate network delay
    });
  };