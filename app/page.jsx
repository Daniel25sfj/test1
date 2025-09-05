export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Velkommen til g0TtErBoYs
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Login for å se mer innhold.
        </p>
        <div className="space-y-2 text-sm text-gray-400">
          <p> Home - Hovedside</p>
          <p> Medlemmer - Medlemsliste</p>
        </div>
      </div>
    </div>
  );
}
