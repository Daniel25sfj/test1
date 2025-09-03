export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Velkommen til g0TtErBoYs
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Bruk navigasjonsbaren øverst for å utforske sidene
        </p>
        <div className="space-y-2 text-sm text-slate-500">
          <p>🏠 Home - Hovedside</p>
          <p>📄 Secondpage - Andre side</p>
          <p>👥 Medlemmer - Medlemsliste</p>
        </div>
      </div>
    </div>
  );
}
