import { ReactNode } from "react";
import { Divider } from "ui/src/components";
import { HouseIcon } from "ui/src/components/Icons/HouseIcon";
import {AnimatedHeading} from "~/components/AnimatedHeading/AnimatedHeading";
import { AuthForm } from "~/components/AuthForm";

export default async function AuthLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex flex-col px-32 justify-center m-auto min-h-screen">
      <AnimatedHeading />
      <div className="flex flex-row mt-32 mx-64 min-h-[440px] md:flex-col">
        <section className="flex flex-1 flex-col h-full justify-around">
          {children}
          <div>
            <p className="text-2xl font-semibold">Why Choose Us?</p>
            <ul className="flex flex-col gap-y-12">
              <li className="flex flex-row">
                <HouseIcon className="mr-2 mt-1" />
                <b>95% satisfaction rate </b> from users finding their ideal
                homes.
              </li>
              <li className="flex flex-row">
                <HouseIcon className="mr-2 mt-1" />
                <b>1 in 3</b> users finds a home within the first week of
                joining.
              </li>
              <li className="flex flex-row">
                <HouseIcon className="mr-2 mt-1" />
                <b>Safe & Secure:</b> Your information is protected with
                top-tier security.
              </li>
            </ul>
          </div>
        </section>
        <Divider
          orientation="vertical"
          className="bg-custom-gray-100  md:hidden mx-32"
        />
        <AuthForm />
      </div>
    </main>
  );
}
