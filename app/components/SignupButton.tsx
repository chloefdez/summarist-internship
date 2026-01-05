"use client";

import * as React from "react";
import { SignUpButton } from "@clerk/nextjs";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function SignupButton({ className = "", children }: Props) {
  return (
    <SignUpButton mode="modal">
      <button type="button" className={className}>
        {children ?? "Sign up"}
      </button>
    </SignUpButton>
  );
}