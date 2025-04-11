import React, { createContext, useState, useContext } from 'react';

// Create results context
const ResultsContext = createContext();

// Custom hook to use the results context
export const useResults = () => useContext(ResultsContext);

// Provider component for the results context
export const ResultsProvider = ({ children }) => {
  // State for results data
  const [resultsData, setResultsData] = useState(null);
  
  // Context value
  const value = {
    resultsData,
    setResultsData
  };
  
  return (
    <ResultsContext.Provider value={value}>
      {children}
    </ResultsContext.Provider>
  );
};