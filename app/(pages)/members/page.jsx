export default function Members() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-800 mb-10 text-center tracking-tight">
          Våre Medlemmer
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-bl-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Member 1</h3>
            <p className="text-slate-600 text-lg">n00b1.</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-green-400 to-blue-400 rounded-bl-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Member 2</h3>
            <p className="text-slate-600 text-lg">pro player 2.</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-bl-2xl opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Member 3</h3>
            <p className="text-slate-600 text-lg">Entry fragger</p>
          </div>
        </div>
      </div>
    </div>
  );
}
