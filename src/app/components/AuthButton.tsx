"use client";
import { signOut } from "@/auth";

export function AuthButton() {
  return (
    <button 
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Sign Out
    </button>
  );
}