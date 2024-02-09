
import { SignInButton, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { userId, user } = auth()
  return (
    <header className="w-full flex items-center px-20 py-4 justify-between">
      <div className="relative">
        <Link href={"/"} className="outline-none">
          <h1 className="text-3xl font-bold">FE:DB</h1>
        </Link>
        <p className="text-sm text-red-500 font-bold absolute -top-3 -right-4 rotate-12">beta</p>
      </div>
      <div>
        <ul className="flex gap-10">
          <li className="transition hover:scale-110 duration-300">
            <Link href={"/cards"} className="font-bold text-lg">
              Card Database
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300">
            <Link href={"/decks"} className="font-bold text-lg">
              Deck Lists
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {
          userId
            ?
            <div className="flex gap-4 items-center">
              <Link className="font-semibold transition hover:scale-110 duration-300" href={"/dashboard"}>Profile</Link>
              <UserButton />
            </div>
            :
            <SignInButton>
              <div className="bg-purple-500 transition hover:scale-110 duration-300 cursor-pointer font-bolb text-white py-1 px-4 rounded">Sign In</div>
            </SignInButton>
        }
      </div>
    </header>
  )
}