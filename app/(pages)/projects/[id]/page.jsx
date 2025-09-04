"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";

export default function ProjectPage({ params }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Unwrap params Promise
  const resolvedParams = use(params);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Fetch from MongoDB API
        const response = await fetch(`/api/mongodb/${resolvedParams.id}`, {
          method: "GET",
        });

        if (response.ok) {
          const projectData = await response.json();
          setProject(projectData);
        } else {
          console.error("Project not found");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isSignedIn && resolvedParams.id) {
      fetchProject();
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
          <p className="text-white text-lg">Laster prosjekt...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Prosjekt ikke funnet
          </h1>
          <p className="text-gray-300 mb-6">
            Prosjektet du leter etter eksisterer ikke.
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
            <h1 className="text-4xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <p className="text-gray-300 text-xl">{project.title}</p>
            <div className="mt-4 flex justify-center gap-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.status}
              </span>
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.priority} Priority
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Prosjekt Informasjon
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Prosjekt Navn
                  </label>
                  <p className="text-white text-lg">{project.name}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Tittel
                  </label>
                  <p className="text-white text-lg">{project.title}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Status
                  </label>
                  <p className="text-white text-lg">{project.status}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Prioritet
                  </label>
                  <p className="text-white text-lg">{project.priority}</p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Start Dato
                  </label>
                  <p className="text-white text-lg">
                    {project.startDate
                      ? new Date(project.startDate).toLocaleDateString("no-NO")
                      : "Ikke spesifisert"}
                  </p>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Slutt Dato
                  </label>
                  <p className="text-white text-lg">
                    {project.endDate
                      ? new Date(project.endDate).toLocaleDateString("no-NO")
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
                  {project.description}
                </p>
              </div>
            </div>
          </div>

                     <div className="mt-8">
             <h2 className="text-2xl font-bold text-white mb-4">Fremgang</h2>
             <div className="bg-gray-700/50 rounded-lg p-4">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-white font-medium">
                   Prosjekt Fremgang
                 </span>
                 <span className="text-gray-300">{project.progress || 0}%</span>
               </div>
               <div className="w-full bg-gray-600 rounded-full h-3">
                 <div
                   className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                   style={{ width: `${project.progress || 0}%` }}
                 ></div>
               </div>
             </div>
           </div>

                     <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div>
               <h2 className="text-2xl font-bold text-white mb-4">
                 Teknologier
               </h2>
               <div className="flex flex-wrap gap-2">
                 {project.technologies && project.technologies.length > 0 ? (
                   project.technologies.map((tech, index) => (
                     <span
                       key={index}
                       className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                     >
                       {tech}
                     </span>
                   ))
                 ) : (
                   <p className="text-gray-300">Ingen teknologier spesifisert.</p>
                 )}
               </div>
             </div>

             <div>
               <h2 className="text-2xl font-bold text-white mb-4">
                 Team Medlemmer
               </h2>
               <div className="space-y-2">
                 {project.team && project.team.length > 0 ? (
                   project.team.map((member, index) => (
                     <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                       <h3 className="text-white font-medium">{member.name}</h3>
                       <p className="text-gray-400 text-sm">{member.role}</p>
                     </div>
                   ))
                 ) : (
                   <div className="bg-gray-700/50 rounded-lg p-3">
                     <p className="text-gray-300">Ingen team medlemmer registrert.</p>
                   </div>
                 )}
               </div>
             </div>
           </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => router.push(`/projects/${project._id}/edit`)}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Rediger Prosjekt
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
