"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";
import GotterBoysLogo from "./GotterBoysLogo";

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();

  const navItems = [
    { name: "Home", href: "/mainPage" },
    { name: "Medlemmer", href: "/members" },
  ];

  const dynamicNavItems = [
    { name: "Players", href: "/players/1" },
    { name: "Teams", href: "/teams/1" },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-700/50 fixed top-0 left-0 w-full z-50">
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
                      ? "bg-blue-600/20 text-blue-400 border-b-2 border-blue-500"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {isLoaded && isSignedIn && (
              <Link
                href="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === "/dashboard"
                    ? "bg-blue-600/20 text-blue-400 border-b-2 border-blue-500"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Dashboard
              </Link>
            )}

            {isLoaded &&
              isSignedIn &&
              dynamicNavItems.map((item) => {
                const isActive = pathname.startsWith(item.href.split("/")[1]);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600/20 text-blue-400 border-b-2 border-blue-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

            <div className="flex items-center">
              {!isLoaded ? (
                <div className="w-8 h-8 animate-pulse bg-gray-600 rounded-full"></div>
              ) : isSignedIn ? (
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors">
                    Logg inn
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
