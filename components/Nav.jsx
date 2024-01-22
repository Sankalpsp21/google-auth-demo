"use client";

import Image from "next/image";
import { 
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton, 
  UserButton } from "@clerk/clerk-react";

export default function Nav() {
  return (
    <nav className="nav p-4 max-h-15 bg-slate-100">
        <ul className="flex flex-row justify-between">
            <SignedIn>
                <div className="flex flex-col justify-center">
                    <UserButton afterSignOutUrl={"/"} />
                </div>
            </SignedIn>
            <SignedOut>
                <div className="flex flex-row gap-2">
                    <SignInButton className="p-2 border-2"/>
                    <SignUpButton className="p-2 border-2"/>
                </div>
            </SignedOut>
        </ul>
    </nav>
  );
}
