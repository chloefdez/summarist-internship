"use client";

import { useEffect, useState } from "react";
import { isAuthed } from "../lib/auth";
import { useModal } from "../components/ModalProvider";

export default function SettingsPage() {
  const { openLogin } = useModal();
  const [ready, setReady] = useState(false);
  const [authed, setAuthedState] = useState(false);

  useEffect(() => {
    setAuthedState(isAuthed());
    setReady(true);
  }, []);

  useEffect(() => {
    const onStorage = () => {
      setAuthedState(isAuthed());
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!ready) return null;

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold">Please log in</h1>
          <p className="mt-2 text-slate-600">
            You need an account to view this page.
          </p>

          <button
            onClick={openLogin}
            className="mt-6 rounded-md bg-[#2cd97c] px-6 py-3 font-medium text-white hover:bg-[#27c96f]"
          >
            Log in
          </button>
        </div>
      </div>
    );
  }

  return <main className="min-h-screen p-6">Settings page (protected)</main>;
}
