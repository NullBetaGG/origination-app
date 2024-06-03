'use client'
import React, { createContext, useContext, useState } from 'react';
import { EnvironmentContextType } from './type';

const EnvironmentContext = createContext<EnvironmentContextType | null>(null);

export const EnvironmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [environment, setEnvironment] = useState(() => {
    return typeof window !== 'undefined' && window.location.hostname === 'origination-app.vercel.app' ? 'PROD' : 'DEV';
  });

  const contextValue = {
    environment,
    setEnvironment,
  };

  return (
    <EnvironmentContext.Provider value={contextValue} >
      {children}
    </EnvironmentContext.Provider>
  );
};

export const useEnvironment = () => {
  const context = useContext(EnvironmentContext);

  if (!context) {
    throw new Error('useEnvironment must be used within an EnvironmentProvider');
  }

  return context;
}