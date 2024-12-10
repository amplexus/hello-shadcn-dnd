"use client"
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

export function SignInButton() {
  return (
    <Button className="text-lg p-6 rounded-xl flex gap-2"
      onClick={() => signIn(undefined, { callbackUrl: "/dashboard" })}>
      Sign In<ArrowRightIcon className="size-5" />
    </Button>
  );
}


