"use client";

import { useState } from "react";
import { useModal } from "./ModalProvider";

export default function SignupModal() {
  const { isSignupOpen, closeSignup } = useModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  if (!isSignupOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={closeSignup}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeSignup}
          className="absolute right-4 top-4 text-xl"
          aria-label="Close signup modal"
        >
          ✕
        </button>

        <h2 className="mb-6 text-xl font-semibold text-center">
          Create an account
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!isValid) return;

            // fake success for now
            closeSignup();
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="mt-3 w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />

          <button
            type="submit"
            disabled={!isValid}
            className={[
              "mt-4 w-full rounded-md py-3 font-medium transition",
              isValid
                ? "bg-[#2cd97c] hover:bg-[#27c96f] hover:shadow-md cursor-pointer"
                : "bg-slate-300 text-slate-600 cursor-not-allowed",
            ].join(" ")}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
