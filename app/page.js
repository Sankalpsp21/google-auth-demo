"use client";

import {
  SignedIn,
  SignedOut,
  useAuth
} from "@clerk/clerk-react";
import { Sign } from "crypto";

export default function Home() {
  const user = useAuth();

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='text-center'>
        <SignedIn>
          Welcome back!
        </SignedIn>
        <SignedOut>
          Welcome stranger!
        </SignedOut>
      </h1>
    </section>
  );
}
