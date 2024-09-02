"use client";
import { usePathname } from "next/navigation";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";

export const AuthForm = () => {
  const path = usePathname();
  if (path === "/signin") {
    return <SignInForm />;
  }
  return <SignUpForm />;
};
