"use client";

export function ModalProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useModal() {
  return {
    isLoginOpen: false,
    openLogin: () => {},
    closeLogin: () => {},
    isSignupOpen: false,
    openSignup: () => {},
    closeSignup: () => {},
  };
}