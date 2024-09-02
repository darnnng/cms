import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="text-xl flex flex-col gap-y-16">
      Unlock access to the best rental and buying opportunities. Connect with
      trusted landlords, discover your dream home, and make your move today!{" "}
      <br />
      <p className="">
        <b>New here?</b>{" "}
        <span className="underline mr-4">
          <Link href="/signup">Sign up</Link>
        </span>
        and start your search for the perfect place to call home.
      </p>
    </div>
  );
}
