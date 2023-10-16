import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-black/90">
      <div className="z-10 flex flex-col w-2/3 font-mono text-sm lg:flex text-white">
        <h1 className="text-3xl justify-start">Story pad</h1>
        <p className="my-6 text-xl">
          The best app for writing and getting quality AI analysis of your short
          stories
        </p>
        <Link href={userId ? "/pad" : "/sign-in"}>
          <button className="text-xl bg-teal-600 px-4 py-2 rounded-lg">
            Get started
          </button>
        </Link>
      </div>
    </main>
  );
}
