// import { NextResponse } from "next/server";
// import { connectToDataBase } from "@/lib/mongodb";

// export async function GET() {
//   try {
//     const db = await connectToDataBase();

//     if (!db) {
//       throw new Error("Database connection failed");
//     }

//     const collection = db.collection("player_stats");
//     const players = await collection.find({}).toArray();

//     const transformedPlayers = players.map((player) => ({
//       _id: player._id,
//       name: player.player.name,
//       steamId: player.player.steam_id,
//       team: player.player.team,
//       matchStats: {
//         kills: player.player.match_stats.kills,
//         deaths: player.player.match_stats.deaths,
//         assists: player.player.match_stats.assists,
//         mvps: player.player.match_stats.mvps,
//         score: player.player.match_stats.score,
//         headshots: player.player.match_stats.headshots,
//         damage: player.player.match_stats.damage,
//       },
//       weaponStats: player.player.weapon_stats,
//       roundsPlayed: player.rounds_played,
//       winRate: player.win_rate,
//       kdRatio: (
//         player.player.match_stats.kills / player.player.match_stats.deaths
//       ).toFixed(2),
//       headshotPercentage: (
//         (player.player.match_stats.headshots /
//           player.player.match_stats.kills) *
//         100
//       ).toFixed(1),
//     }));

//     return NextResponse.json(transformedPlayers);
//   } catch (error) {
//     console.error("Error fetching player stats:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch player statistics" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const db = await connectToDataBase();

//     if (!db) {
//       throw new Error("Database connection failed");
//     }

//     const collection = db.collection("player_stats");

//     const newPlayerStats = {
//       player: {
//         name: body.name,
//         steam_id: body.steamId,
//         team: body.team,
//         match_stats: {
//           kills: body.kills || 0,
//           deaths: body.deaths || 0,
//           assists: body.assists || 0,
//           mvps: body.mvps || 0,
//           score: body.score || 0,
//           headshots: body.headshots || 0,
//           damage: body.damage || 0,
//         },
//         weapon_stats: body.weaponStats || {},
//       },
//       rounds_played: body.roundsPlayed || 0,
//       win_rate: body.winRate || 0,
//     };

//     const result = await collection.insertOne(newPlayerStats);
//     newPlayerStats._id = result.insertedId;

//     return NextResponse.json(newPlayerStats, { status: 201 });
//   } catch (error) {
//     console.error("Error creating player stats:", error);
//     return NextResponse.json(
//       { error: "Failed to create player statistics" },
//       { status: 500 }
//     );
//   }
// }
