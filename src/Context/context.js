import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
