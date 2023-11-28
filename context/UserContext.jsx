import React, { createContext, useContext, useState } from 'react';
import { initialUsers } from '../data/users';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);


  const signup = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setCurrentUser(user);
  };

  const login = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    console.log(user);
    if (user) {
      setCurrentUser(user);
    } else {
      console.log('please enter email and password');
    }
  };

  const signout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, signup, login, signout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
