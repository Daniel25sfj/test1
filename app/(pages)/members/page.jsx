export default function Members() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Members
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Member cards can go here */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Member 1</h3>
              <p className="opacity-90">Description for member 1</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Member 2</h3>
              <p className="opacity-90">Description for member 2</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-white border border-white/30">
              <h3 className="text-xl font-semibold mb-2">Member 3</h3>
              <p className="opacity-90">Description for member 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
