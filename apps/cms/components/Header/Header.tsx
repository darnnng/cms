"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Input } from "ui/src/components";
import { Sun } from "ui/src/components/Icons/Sun";

export const Header = () => {
  const { data: session } = useSession();
  let firstName, email;
  if (session && session.user) {
    ({ firstName, email } = session.user);
  }

  return (
    <header className="flex flex-col relative top-0 px-32 py-16 h-96 bg-white select-none">
      <div className="flex flex-row gap-x-16 h-24 justify-end items-center">
        <div className="flex flex-row font-bold text-sm gap-x-12">
          <p className="cursor-pointer">en</p>
          <p className="cursor-pointer">es</p>
          <p className="cursor-pointer">ru</p>
          <p className="cursor-pointer">
            <Sun size="sm" className="text-xl" />
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-x-8 justify-between w-full items-center">
        <Link href="/">
          <p className="flex items-center">
            <span>*</span>
            <span className="text-xl font-semibold ">HouseHub</span>
          </p>
        </Link>
        <div className="flex flex-row gap-x-8 items-center">
          <p>search for a perfect match:</p>
          <Input />
        </div>
        {session && session.user ? (
          <div>
            <p className="text-black">{firstName}</p>
            {/* <Link
              href={"api/auth/signout"}
              className="flex gap-4 ml-auto text-red-600"
            >
              Sign out
            </Link> */}
          </div>
        ) : (
          <div className="flex flex-row gap-x-12">
            <Link
              href={"api/auth/signin"}
              className="flex gap-4 ml-auto font-semibold text-custom-blue-700"
            >
              Sign in
            </Link>
            <Link
              href={"/signup"}
              className="flex gap-4 ml-auto font-semibold text-custom-blue-700"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
