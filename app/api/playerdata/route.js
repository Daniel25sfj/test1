import { connectToDataBase } from "@/lib/mongodb";

const mockPlayerData = [
  {
    _id: "1",
    name: "ShadowStrike",
    title: "CS2 Global Elite",
    description: "CS2 Global Elite | 2.5K hours | AWP Main | Rank S Player",
    content:
      "Elite Counter-Strike 2 player specializing in AWP sniping. Known for clutch plays and tactical positioning.",
    game: "Counter-Strike 2",
    rank: "Global Elite",
    hours: 2500,
    role: "AWP Sniper",
    achievements: ["Rank S Player", "Major Tournament Winner", "Clutch Master"],
    createdAt: new Date("2024-01-15"),
  },
  {
    _id: "2",
    name: "PhoenixRush",
    title: "Valorant Radiant",
    description: "Valorant Radiant | 1.8K hours | Jett Main | Pro Team Captain",
    content:
      "Top-tier Valorant player with exceptional movement and aim. Leads professional team with aggressive playstyle.",
    game: "Valorant",
    rank: "Radiant",
    hours: 1800,
    role: "Duelist",
    achievements: ["Pro Team Captain", "VCT Contender", "Movement Master"],
    createdAt: new Date("2024-01-20"),
  },
  {
    _id: "3",
    name: "MidLaneKing",
    title: "LoL Challenger",
    description:
      "League of Legends Challenger | 3.2K hours | Mid Lane | 1v9 Carry",
    content:
      "Elite League of Legends mid laner with exceptional mechanical skills and game sense. Known for carrying games.",
    game: "League of Legends",
    rank: "Challenger",
    hours: 3200,
    role: "Mid Laner",
    achievements: ["1v9 Carry", "Worlds Qualifier", "Mechanical God"],
    createdAt: new Date("2024-01-25"),
  },
  {
    _id: "4",
    name: "WraithMain",
    title: "Apex Predator",
    description:
      "Apex Legends Predator | 1.5K hours | Wraith Main | 20 Bomb Record",
    content:
      "Dominant Apex Legends player with incredible movement and positioning. Holds multiple kill records.",
    game: "Apex Legends",
    rank: "Predator",
    hours: 1500,
    role: "Assault",
    achievements: ["20 Bomb Record", "ALGS Champion", "Movement Legend"],
    createdAt: new Date("2024-02-01"),
  },
  {
    _id: "5",
    name: "TracerGod",
    title: "OW Top 500",
    description: "Overwatch Top 500 | 2.1K hours | Tracer Main | OWL Contender",
    content:
      "Professional Overwatch player with exceptional tracking and positioning. Competing in OWL circuits.",
    game: "Overwatch",
    rank: "Top 500",
    hours: 2100,
    role: "DPS",
    achievements: ["OWL Contender", "Tracking Master", "Positioning God"],
    createdAt: new Date("2024-02-05"),
  },
  {
    _id: "6",
    name: "BuilderPro",
    title: "Fortnite Champion",
    description:
      "Fortnite Champion | 4.0K hours | Builder Pro | World Cup Qualifier",
    content:
      "Elite Fortnite player with incredible building skills and game sense. Multiple tournament victories.",
    game: "Fortnite",
    rank: "Champion",
    hours: 4000,
    role: "Builder",
    achievements: ["World Cup Qualifier", "Building Master", "Cash Cup Winner"],
    createdAt: new Date("2024-02-10"),
  },
];

export async function GET() {
  try {
    const db = await connectToDataBase();

    if (!db) {
      throw new Error("Database connection failed");
    }

    const playerStatsCollection = db.collection("player_stats");
    const playerStats = await playerStatsCollection.find({}).toArray();

    if (playerStats.length > 0) {
      const transformedPlayers = playerStats.map((player) => ({
        _id: player._id,
        name: player.player.name,
        title: `${player.player.team} Player`,
        description: `${player.player.team} | ${player.player.match_stats.kills}K/${player.player.match_stats.deaths}D | ${player.win_rate}% Win Rate`,
        content: `Professional CS2 player with ${player.player.match_stats.kills} kills, ${player.player.match_stats.deaths} deaths, and ${player.win_rate}% win rate.`,
        game: "Counter-Strike 2",
        rank: player.player.team,
        hours: Math.floor(Math.random() * 3000) + 1000,
        role: "Professional Player",
        achievements: [
          `${player.player.match_stats.mvps} MVP Awards`,
          `${player.player.match_stats.headshots} Headshots`,
          `${player.win_rate}% Win Rate`,
        ],
        matchStats: {
          kills: player.player.match_stats.kills,
          deaths: player.player.match_stats.deaths,
          assists: player.player.match_stats.assists,
          mvps: player.player.match_stats.mvps,
          score: player.player.match_stats.score,
          headshots: player.player.match_stats.headshots,
          damage: player.player.match_stats.damage,
        },
        weaponStats: player.player.weapon_stats,
        roundsPlayed: player.rounds_played,
        winRate: player.win_rate,
        kdRatio: (
          player.player.match_stats.kills / player.player.match_stats.deaths
        ).toFixed(2),
        headshotPercentage: (
          (player.player.match_stats.headshots /
            player.player.match_stats.kills) *
          100
        ).toFixed(1),
      }));

      return Response.json(transformedPlayers);
    }

    const collection = db.collection("players");
    const players = await collection.find({}).toArray();

    if (players.length === 0) {
      console.log("No players found, seeding database...");
      await collection.insertMany(mockPlayerData);
      return Response.json(mockPlayerData);
    }

    return Response.json(players);
  } catch (error) {
    console.error("Error fetching player data:", error);

    return Response.json(mockPlayerData);
  }
}
