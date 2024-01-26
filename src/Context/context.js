// SearchContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);
  
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the context
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
