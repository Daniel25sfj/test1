export default function Members() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 relative overflow-hidden flex items-center justify-center pt-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none animate-pulse">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative z-10 p-8 w-full">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-10 text-center drop-shadow-lg tracking-tight">
            Our Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member cards */}
            <div className="group bg-white/30 backdrop-blur-xl rounded-2xl p-8 text-gray-900 border border-white/40 shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-bl-2xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">
                Member 1
              </h3>
              <p className="opacity-90 text-lg">
                Creative designer and frontend developer.
              </p>
            </div>
            <div className="group bg-white/30 backdrop-blur-xl rounded-2xl p-8 text-gray-900 border border-white/40 shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-green-400 to-blue-400 rounded-bl-2xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-green-900">
                Member 2
              </h3>
              <p className="opacity-90 text-lg">
                Backend specialist and API architect.
              </p>
            </div>
            <div className="group bg-white/30 backdrop-blur-xl rounded-2xl p-8 text-gray-900 border border-white/40 shadow-xl transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-bl-2xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-purple-900">
                Member 3
              </h3>
              <p className="opacity-90 text-lg">
                Fullstack developer and project manager.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
