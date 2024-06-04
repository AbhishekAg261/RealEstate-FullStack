import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storageData = JSON.parse(localStorage.getItem("user")) || null;
  const [currentUser, setCurrentUser] = useState(storageData);

  const [filterData, setFilterData] = useState();

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  const updateFilterData = (data) => {
    // console.log("test final");
    setFilterData(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser, updateFilterData }}>
      {children}
    </AuthContext.Provider>
  );
};
