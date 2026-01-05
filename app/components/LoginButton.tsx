"use client";

import * as React from "react";
import { SignInButton } from "@clerk/nextjs";

type LoginButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function LoginButton({
  className = "",
  children,
}: LoginButtonProps) {
  return (
    <SignInButton mode="modal">
      <button type="button" className={className}>
        {children ?? "Login"}
      </button>
    </SignInButton>
  );
}
