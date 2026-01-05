export function isAuthed() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("summarist_authed") === "true";
}

export function setAuthed(value: boolean) {
  if (typeof window === "undefined") return;

  localStorage.setItem("summarist_authed", value ? "true" : "false");

  // Broadcast auth change for same-tab updates
  window.dispatchEvent(new Event("auth-changed"));
}

export function logout() {
  setAuthed(false);
}
