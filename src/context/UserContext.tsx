import React, { createContext, useEffect, useState } from 'react'
import { User, UserCategory } from '../models/User';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../configs/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const UserContext = createContext({
    devUsers: [] as User[],
    addUser: (_newUser: User) => {},
    removeUser: (_id: string) => {},
    removeUsers: (_id: string[]) => {},
   // updateUser: (_newUser: User) => {},
    setDevUsers: (_users: User[]) => {},
  });
  
export function UserProvider({ children }: { children: React.ReactNode }) {
  
  
   // const [devUsers, setDevUsers] = useLocalStorage<User[]>("devUsers", initialUsers);
    const [devUsers, setDevUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "users")); // Fetch users from the 'users' collection
            const users: User[] = querySnapshot.docs.map((doc) => ({
              id: doc.id, // Firestore document ID as the user ID
              ...doc.data(), // Spread the rest of the data
            })) as User[];
    
            setDevUsers(users); // Set the fetched users to state
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
    
        fetchUsers();
      }, []);

    // const updateUser = (updatedUser: User) => {
    //     setDevUsers((prevUsers) =>
    //       prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    //     );
    //   };

    // const addUser = (newUser: User) => {
    //     const updatedData = [...devUsers, newUser];
    //     setDevUsers(updatedData);
    //   };

      const addUser = async (newUser: User) => {
        try {
            let userWithId: User;
            if(newUser.category== UserCategory.Admin){

                const userCredential = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
                const authUser = userCredential.user;
          
                // Step 2: Add the user to Firestore with the same UID as the document ID
                const userDocRef = doc(collection(db, "users"), authUser.uid); // Explicitly set Firestore document ID to match Firebase Auth UID
                await setDoc(userDocRef, {
                  ...newUser,
                  id: authUser.uid, // Use Firebase Auth UID as the user ID
                });
          
                userWithId = { ...newUser, id: authUser.uid };
                setDevUsers((prevUsers) => [...prevUsers, userWithId]);

            } else{

            
            
          const docRef = await addDoc(collection(db, "users"), newUser); // Add the user to Firestore
           userWithId = { ...newUser, id: docRef.id }; // Assign Firestore-generated ID
          await updateDoc(docRef, { id: docRef.id });
           // Update local state
           setDevUsers((prevUsers) => [...prevUsers, userWithId]);
        }
        
        } catch (error) {
          console.error("Error adding user:", error);
        }
      };

      
    
    //   const removeUser = (id: string) => {
    //     const updatedUsersData = devUsers.filter((user) => user.id !== id);
    //     setDevUsers(updatedUsersData);
    //   };

      const removeUser = async (id: string) => {
        try {
          
          const userRef = doc(db, "users", id); // Delete the user by ID in Firestore
          const userSnap = await getDoc(userRef);
          if (!userSnap.exists()) {
            console.error("User not found.");
            return;
          }
          await deleteDoc(userRef);
          setDevUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)); // Update local state
        } catch (error) {
          console.error("Error removing user:", error);
        }
      };


    //   const removeUsers = (ids: string[]) => {
    //     const updatedUsersData = devUsers.filter((user) => !ids.includes(user.id));
    //     setDevUsers(updatedUsersData);
    //   };
      const removeUsers = async (ids: string[]) => {
        try {
            console.log("Removing users with IDs:", ids);
    
            // 1. Delete each user by ID, returning the promises for `Promise.all`
            const deletePromises = ids.map(async (id) => {
              const docRef = doc(db, "users", id); // Get the Firestore document reference
              const docSnap = await getDoc(docRef);
              if (! docSnap.exists()) {
                console.error("User not found.");
                return;
              }
              console.log(docRef.id);
              return deleteDoc(docRef); // Return the promise for deletion
            });
        
            // 2. Wait for all deletions to complete
            await Promise.all(deletePromises);
          
          // Wait for all deletions to complete
          setDevUsers((prevUsers) => prevUsers.filter((user) => !ids.includes(user.id))); // Update local state
        } catch (error) {
          console.error("Error removing users:", error);
        }
      };

   
    return (
      <UserContext.Provider
        value={{ devUsers,  setDevUsers, addUser, removeUsers,removeUser }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  