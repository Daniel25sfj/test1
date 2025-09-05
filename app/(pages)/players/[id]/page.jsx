"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

export default function PlayerPage({ params }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  const resolvedParams = use(params);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`/api/mongodb/${resolvedParams.id}`, {
          method: "GET",
        });

        if (response.ok) {
          const playerData = await response.json();
          setPlayer(playerData);
        } else {
          console.error("Player not found");
        }
      } catch (error) {
        console.error("Error fetching player:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isSignedIn && resolvedParams.id) {
      fetchPlayer();
    }
  }, [isSignedIn, resolvedParams.id]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Laster spiller...</p>
        </div>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Spiller ikke funnet
          </h1>
          <p className="text-gray-300 mb-6">
            Spilleren du leter etter eksisterer ikke.
          </p>
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Tilbake til Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors mb-6"
          >
            ← Tilbake
          </button>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {player.name || player.title}
            </h1>
            <p className="text-gray-300 text-xl">{player.title || "Spiller"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Informasjon
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Navn
                  </label>
                  <p className="text-white text-lg">
                    {player.name || "Ikke spesifisert"}
                  </p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Tittel
                  </label>
                  <p className="text-white text-lg">
                    {player.title || "Ikke spesifisert"}
                  </p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Opprettet
                  </label>
                  <p className="text-white text-lg">
                    {player.createdAt
                      ? new Date(player.createdAt).toLocaleDateString("no-NO")
                      : "Ikke spesifisert"}
                  </p>
                </div>
                {player.updatedAt && (
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Sist oppdatert
                    </label>
                    <p className="text-white text-lg">
                      {new Date(player.updatedAt).toLocaleDateString("no-NO")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Beskrivelse
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed">
                  {player.description ||
                    player.content ||
                    "Ingen beskrivelse tilgjengelig."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => router.push(`/players/${player._id}/edit`)}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Rediger Spiller
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Tilbake til Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
