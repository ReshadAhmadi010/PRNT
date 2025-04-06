import React, { createContext, useContext, useState, ReactNode } from "react";

interface CounterContextType {
  counter: number;
  incrementCounter: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
