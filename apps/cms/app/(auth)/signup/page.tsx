import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="text-xl flex flex-col gap-y-16">
      Find your perfect home with us. Join now to explore the best rental and
      buying options tailored to your needs. Whether you are renting or buying,
      your ideal home is just a few clicks away! <br />
      <p>
        <b>Already here?</b>{" "}
        <span className="underline mr-4">
          <Link href="/signin" replace>
            Sign in
          </Link>
        </span>
        and step closer to your new home!
      </p>
    </div>
  );
}
