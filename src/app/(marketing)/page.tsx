import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { FaTwitter, FaDatabase, FaDiscord } from "react-icons/fa";
import { SignInButton, auth, UserButton } from "@clerk/nextjs";
import Header from "../_components/header";

export default async function Home() {
  noStore();
  const { userId } = auth()
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="max-w-lg text-center text-5xl tracking-tighter font-bold">Next Gen Deck Buiding for the players</p>
          <p className="text-lg text-gray-500 font-medium">OP Card Game is better then ever. Deck Buikding needs to catch up.</p>
        </div>
      </main>
      <footer className="w-full flex justify-between items-center px-20 py-6">
        <div>
          <p className="font-bold">© 2023 FE Industries. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li className="font-semibold">
              <Link href={'/tos'}>
                TOS
              </Link>
            </li>
            <li>
              <Link href={"/deckbuilder"}>
                <FaDatabase size={24} />
              </Link>
            </li>
            <li>
              <FaTwitter size={24} />
            </li>
            <li>
              <FaDiscord size={24} />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}