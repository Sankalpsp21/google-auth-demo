"use client";

import {
  SignedIn,
  SignedOut,
  useAuth,
  useUser
} from "@clerk/clerk-react";
import { Sign } from "crypto";

export default function Home() {
  const { user } = useUser();

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='text-center'>
        <SignedIn>
          Welcome back {user && `${user.firstName} ${user.lastName}`}!
        </SignedIn>
        <SignedOut>
          Welcome stranger!
        </SignedOut>
      </h1>
    </section>
  );
}
