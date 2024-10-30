import React, { createContext } from 'react'
import { User } from '../models/User';
import { useLocalStorage } from '../hooks/UseLocalStorage';
import initialUsers from '../data';

export const UserContext = createContext({
    devUsers: [] as User[],
    addUser: (_newUser: User) => {},
    removeUser: (_id: string) => {},
    removeUsers: (_id: string[]) => {},
   // updateUser: (_newUser: User) => {},
    setDevUsers: (_users: User[]) => {},
  });
  
export function UserProvider({ children }: { children: React.ReactNode }) {
  
  
    const [devUsers, setDevUsers] = useLocalStorage<User[]>("devUsers", initialUsers);

    // const updateUser = (updatedUser: User) => {
    //     setDevUsers((prevUsers) =>
    //       prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    //     );
    //   };
    const addUser = (newUser: User) => {
        const updatedData = [...devUsers, newUser];
        setDevUsers(updatedData);
      };
    
      const removeUser = (id: string) => {
        const updatedUsersData = devUsers.filter((user) => user.id !== id);
        setDevUsers(updatedUsersData);
      };
    const removeUsers = (ids: string[]) => {
        const updatedUsersData = devUsers.filter((user) => !ids.includes(user.id));
        setDevUsers(updatedUsersData);
      };
    return (
      <UserContext.Provider
        value={{ devUsers,  setDevUsers, addUser, removeUsers,removeUser }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  