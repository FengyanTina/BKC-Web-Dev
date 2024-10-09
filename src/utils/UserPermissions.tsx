import { User } from "../models/User";

export const canEditPages = (user: User): boolean => user.permissions.canEditPages;
export const canViewPages = (user: User): boolean => user.permissions.canViewPages;
export const canEditSchedules = (user: User): boolean => user.permissions.canEditSchedules;
export const canViewSchedules = (user: User): boolean => user.permissions.canViewSchedules;