"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextValue = {
  // Login
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;

  // Signup
  isSignupOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        openLogin,
        closeLogin,
        isSignupOpen,
        openSignup,
        closeSignup,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}