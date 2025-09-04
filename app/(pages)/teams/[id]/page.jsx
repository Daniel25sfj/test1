"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

export default function TeamPage({ params }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  const resolvedParams = use(params);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`/api/mongodb/${resolvedParams.id}`, {
          method: "GET",
        });

        if (response.ok) {
          const teamData = await response.json();
          setTeam(teamData);
        } else {
          console.error("Team not found");
        }
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isSignedIn && resolvedParams.id) {
      fetchTeam();
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
          <p className="text-white text-lg">Laster team...</p>
        </div>
      </div>
    );
  }

  if (!team) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Team ikke funnet
          </h1>
          <p className="text-gray-300 mb-6">
            Teamet du leter etter eksisterer ikke.
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
      <div className="max-w-6xl mx-auto">
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
            <h1 className="text-4xl font-bold text-white mb-4">{team.name}</h1>
            <p className="text-gray-300 text-xl">{team.title}</p>
            <div className="mt-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {team.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Team Informasjon
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Team Navn
                  </label>
                  <p className="text-white text-lg">{team.name}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Tittel
                  </label>
                  <p className="text-white text-lg">{team.title}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Status
                  </label>
                  <p className="text-white text-lg">{team.status}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Opprettet
                  </label>
                  <p className="text-white text-lg">
                    {team.createdAt
                      ? new Date(team.createdAt).toLocaleDateString("no-NO")
                      : "Ikke spesifisert"}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Beskrivelse
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed">
                  {team.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Team Medlemmer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {team.members && team.members.length > 0 ? (
                team.members.map((member, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                    <h3 className="text-white font-medium">{member.name}</h3>
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-full bg-gray-700/50 rounded-lg p-4">
                  <p className="text-gray-300">
                    Ingen medlemmer registrert for dette teamet.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => router.push(`/teams/${team._id}/edit`)}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Rediger Team
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
