"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
      npm;
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Velkommen tilbake! 🎉
          </h1>
          <p className="text-slate-600 text-lg">
            Du er nå innlogget på g0TtErBoYs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              📊 Dashboard
            </h2>
            <p className="text-slate-600 mb-4">
              Her kan du se din personlige oversikt og innstillinger.
            </p>
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              Gå til Dashboard
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              👥 Profil
            </h2>
            <p className="text-slate-600 mb-4">
              Oppdater din profil og personlige informasjon.
            </p>
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              Rediger Profil
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              🔒 Innstillinger
            </h2>
            <p className="text-slate-600 mb-4">
              Administrer dine kontoinnstillinger og sikkerhet.
            </p>
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              Innstillinger
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              📱 Notifikasjoner
            </h2>
            <p className="text-slate-600 mb-4">
              Se dine siste meldinger og oppdateringer.
            </p>
            <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              Se Meldinger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
