"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextValue = {
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
};
const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <ModalContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
