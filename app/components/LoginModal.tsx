"use client";

import { useState } from "react";
import { useModal } from "./ModalProvider";

export default function LoginModal() {
  const { isLoginOpen, closeLogin } = useModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  if (!isLoginOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={closeLogin}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeLogin}
          className="absolute right-4 top-4 text-xl"
          aria-label="Close login modal"
        >
          ✕
        </button>

        <h2 className="mb-6 text-xl font-semibold text-center">
          Log in to Summarist
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!isValid) return;

            // fake success for now
            closeLogin();
          }}
        >
          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />

          {/* Password */}
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
            Login
          </button>
          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px w-full bg-slate-200" />
            <span className="text-xs text-slate-500">or</span>
            <div className="h-px w-full bg-slate-200" />
          </div>

          {/* Guest login */}
          <button
            type="button"
            className="w-full rounded-md border border-slate-300 bg-white py-3 font-medium text-slate-800 transition hover:bg-slate-50"
            onClick={() => {
              // fake guest success for now
              closeLogin();
            }}
          >
            Login as Guest
          </button>

          {/* Google login */}
          <button
            type="button"
            className="mt-3 w-full rounded-md border border-slate-300 bg-white py-3 font-medium text-slate-800 transition hover:bg-slate-50"
            onClick={() => {
              // later: Clerk Google auth
              alert("Google login coming next 🙂");
            }}
          >
            Continue with Google
          </button>
          {/* Links */}
          <div className="mt-4 flex flex-col items-center gap-3 text-sm">
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => alert("Forgot password coming soon 🙂")}
            >
              Forgot your password?
            </button>

            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => alert("Sign up modal coming soon 🙂")}
            >
              Don&apos;t have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}