"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between p-4 bg-white shadow">
      <h1 className="font-bold">CollegeFinder</h1>

      {session ? (
        <div className="flex items-center gap-3">
          <img
            src={session.user?.image || ""}
            className="w-8 h-8 rounded-full"
          />
          <button onClick={() => signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Login
        </button>
      )}
    </nav>
  );
}