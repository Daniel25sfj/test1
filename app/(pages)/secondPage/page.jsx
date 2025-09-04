export default function SecondPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            SecondPage
          </h1>
          <p className="text-gray-300 text-xl">Den andre siden av g0TtErBoYs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Andre Side</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to the second page!
            </p>
            <p className="text-gray-400">
              Dette er den andre siden av g0TtErBoYs nettside.
            </p>
          </div>

          <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Koblinger</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Her finner du lenker til andre deler av nettsiden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
