import React, { createContext, useContext, ReactNode, useState } from 'react';

interface Additional {
    id: string,
    name: string,
    description: string,
    price: string,
    checked: boolean
}

interface GlobalContextData {
  formData: { name: string | null, email: string | null, phoneNumber: string | null };
  plansMonth: { id: string | null, title: string | null, price: string | null, value: number | null, img: string | null};
  plansYearly: { id: string | null, title: string | null, price: string | null, value: number | null, promotion: string | null, img: string | null};
  additional: Additional[] | null;
  setFormData: (formData: { name: string, email: string, phoneNumber: string }) => void;
  setPlansMonth: (formData: { id: string, title: string, price: string, value: number, img: string}) => void;
  setPlansYearly: (formData: { id: string, title: string, price: string, value: number, promotion: string, img: string}) => void;
  setAdditional: (additional: Additional[]) => void
}

const GlobalContext = createContext<GlobalContextData | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [formData, setFormData] = useState<{ name: string | null, email: string | null, phoneNumber: string | null }>({
    name: null,
    email: null,
    phoneNumber: null
  })
  const [plansMonth, setPlansMonth] = useState<{ id: string | null, title: string | null, price: string | null, value: number | null, img: string | null}>({
    id: null,
    title: null,
    price: null,
    value: null,
    img: null
  })
  const [plansYearly, setPlansYearly] = useState<{ id: string | null, title: string | null, price: string | null, value: number | null, promotion: string | null, img: string | null}>({
    id: null,
    title: null,
    price: null,
    value: null,
    promotion: null,
    img: null
  })
  const [additional, setAdditional] = useState<Additional[] | null>(null);

  const globalData: GlobalContextData = {
    formData,
    plansMonth,
    plansYearly,
    additional,
    setFormData,
    setPlansMonth,
    setPlansYearly,
    setAdditional
  };

  return (
    <GlobalContext.Provider value={globalData}>{children}</GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
}
