"use client";

export default function PlayerStatsCard({ player }) {
  if (!player) return null;

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-gray-900/50 hover:-translate-y-1">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{player.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{player.title}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
            {player.team}
          </span>
          <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
            K/D: {player.kdRatio}
          </span>
          <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
            HS%: {player.headshotPercentage}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-700/50 rounded-lg p-3">
          <h4 className="text-white font-semibold mb-2">Match Stats</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Kills:</span>
              <span className="text-green-400 font-bold">
                {player.matchStats.kills}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Deaths:</span>
              <span className="text-red-400 font-bold">
                {player.matchStats.deaths}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Assists:</span>
              <span className="text-blue-400 font-bold">
                {player.matchStats.assists}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">MVPs:</span>
              <span className="text-yellow-400 font-bold">
                {player.matchStats.mvps}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/50 rounded-lg p-3">
          <h4 className="text-white font-semibold mb-2">Performance</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Score:</span>
              <span className="text-white font-bold">
                {player.matchStats.score}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Headshots:</span>
              <span className="text-orange-400 font-bold">
                {player.matchStats.headshots}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Damage:</span>
              <span className="text-red-400 font-bold">
                {player.matchStats.damage}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Rounds:</span>
              <span className="text-gray-300 font-bold">
                {player.roundsPlayed}
              </span>
            </div>
          </div>
        </div>
      </div>

      {player.weaponStats && Object.keys(player.weaponStats).length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Weapon Performance</h4>
          <div className="space-y-2">
            {Object.entries(player.weaponStats).map(([weapon, stats]) => (
              <div key={weapon} className="bg-gray-700/50 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{weapon}</span>
                  <span className="text-green-400 font-bold">
                    {stats.kills} kills
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Accuracy:</span>
                  <span className="text-blue-400">{stats.accuracy}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {player.achievements && player.achievements.length > 0 && (
        <div>
          <h4 className="text-white font-semibold mb-3">Achievements</h4>
          <div className="flex flex-wrap gap-2">
            {player.achievements.map((achievement, index) => (
              <span
                key={index}
                className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
