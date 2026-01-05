"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

export default function AuthButton() {
  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <LoginButton className="rounded-md bg-[#2cd97c] px-4 py-2 font-medium text-white hover:bg-[#27c96f]">
          Login
        </LoginButton>

        <SignupButton className="rounded-md border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50">
          Sign up
        </SignupButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}