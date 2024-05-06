import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Monty Hall Simulator",
  description: "If this doesn't make you believe that switching doors is the best strategy, I don't know what will",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <nav className="flex dark:bg-black justify-between p-4 bg-slate-900 text-white">
      <Link href="/">
        <h1 className="text-3xl font-bold">Monty Hall Simulator</h1>
      </Link>
      <Link href="/">
        Simulator
      </Link>
      <Link href="/about">
        About
      </Link>
    </nav>
  )
}
