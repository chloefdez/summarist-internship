"use client";

import { ReactNode } from "react";
import { useModal } from "./ModalProvider";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LoginButton({ children, className }: Props) {
  const { openLogin } = useModal();

  return (
    <button onClick={openLogin} className={className}>
      {children}
    </button>
  );
}