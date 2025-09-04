"use client";

import { SignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Laster...</p>
        </div>
      </div>
    );
  }

  if (isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center pt-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Velkommen til g0TtErBoYs
          </h1>
          <p className="text-gray-300 text-lg">Logg inn for å fortsette</p>
        </div>
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700/50 p-8">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-500 text-sm normal-case font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25",
                card: "bg-transparent shadow-none border-none",
                headerTitle: "text-white text-2xl font-bold",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton:
                  "bg-gray-700 hover:bg-gray-600 text-white border-gray-600",
                formFieldInput:
                  "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500",
                formFieldLabel: "text-gray-300",
                footerActionLink: "text-blue-400 hover:text-blue-300",
                identityPreviewText: "text-gray-300",
                formResendCodeLink: "text-blue-400 hover:text-blue-300",
              },
            }}
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}
