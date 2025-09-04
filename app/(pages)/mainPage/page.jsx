export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Velkommen til g0TtErBoYs
          </h1>
          <p className="text-gray-300 text-xl">
            Din hovedside for alt du trenger
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Hjem</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Velkommen til hovedsiden! Her kan du finne hovedinnholdet for
              g0TtErBoYs.
            </p>
          </div>

          <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Sider</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Utforsk alle våre sider og funksjoner.
            </p>
          </div>

          <div className="group bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">Medlemmer</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Se våre medlemmer og deres bidrag.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
