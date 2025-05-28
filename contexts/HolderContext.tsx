"use client";
import React, { createContext, useContext, useState } from "react";

const initholder = {
  holder: undefined,
  number: undefined,
  month: undefined,
  year: undefined,
  cvc: undefined,
};

const holderContext = createContext<any>(null);

export default function HolderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [holder, setHolder] = useState<any>(initholder);
  return (
    <holderContext.Provider value={{ holder, setHolder }}>
      {children}
    </holderContext.Provider>
  );
}

export const useHolder = () => {
  const context = useContext(holderContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
};
