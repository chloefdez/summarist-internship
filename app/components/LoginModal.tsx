"use client";

import { useState } from "react";
import { useModal } from "./ModalProvider";

export default function LoginModal() {
  const { isLoginOpen, closeLogin } = useModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isLoginOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6">
        <button onClick={closeLogin} className="absolute right-4 top-4 text-xl">
          ✕
        </button>

        <h2 className="mb-6 text-xl font-semibold text-center">
          Log in to Summarist
        </h2>

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
      </div>
    </div>
  );
}