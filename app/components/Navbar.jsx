"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GotterBoysLogo from "./GotterBoysLogo";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  const navItems = [
    { name: "Home", href: "/mainPage" },
    { name: "Secondpage", href: "/secondPage" },
    { name: "Medlemmer", href: "/members" },
    ...(isSignedIn ? [{ name: "Dashboard", href: "/login" }] : []),
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-slate-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <GotterBoysLogo />
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-slate-100 text-slate-700 border-b-2 border-slate-500"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors duration-200">
                    Logg inn
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 text-sm font-medium bg-slate-600 text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
                    Registrer deg
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
