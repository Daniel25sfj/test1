import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "testing-items-database";

// Teams data
const teamsData = [
  {
    name: "Team Alpha",
    title: "CS2 Pro Team",
    description:
      "CS2 Global Elite Squad | 15K+ combined hours | Major Tournament Winners",
    content:
      "Elite Counter-Strike 2 team with multiple tournament victories. Specializes in tactical gameplay and precision aim.",
    status: "Active",
    members: [
      { name: "Ace", role: "IGL/AWP" },
      { name: "Frag", role: "Entry Fragger" },
      { name: "Support", role: "Support Player" },
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    name: "Team Beta",
    title: "Valorant Champions",
    description: "Valorant Radiant Team | 12K+ combined hours | VCT Contenders",
    content:
      "Top-tier Valorant team competing in professional circuits. Known for aggressive plays and clutch moments.",
    status: "Active",
    members: [
      { name: "Jett", role: "Duelist" },
      { name: "Sage", role: "Sentinel" },
      { name: "Omen", role: "Controller" },
    ],
    createdAt: new Date("2024-01-20"),
  },
  {
    name: "Team Gamma",
    title: "League of Legends Squad",
    description: "LoL Challenger Team | 20K+ combined hours | Worlds Qualifier",
    content:
      "Elite League of Legends team with strategic gameplay and mechanical excellence. Multiple regional championships.",
    status: "Active",
    members: [
      { name: "Top", role: "Top Laner" },
      { name: "Jungle", role: "Jungler" },
      { name: "Mid", role: "Mid Laner" },
      { name: "ADC", role: "Bot Laner" },
      { name: "Support", role: "Support" },
    ],
    createdAt: new Date("2024-01-25"),
  },
  {
    name: "Team Delta",
    title: "Apex Legends Predators",
    description: "Apex Predator Squad | 8K+ combined hours | ALGS Champions",
    content:
      "Dominant Apex Legends team with exceptional movement and positioning. Multiple tournament wins.",
    status: "Active",
    members: [
      { name: "Wraith", role: "Assault" },
      { name: "Pathfinder", role: "Recon" },
      { name: "Lifeline", role: "Support" },
    ],
    createdAt: new Date("2024-02-01"),
  },
  {
    name: "Team Epsilon",
    title: "Overwatch Champions",
    description: "OW Top 500 Team | 10K+ combined hours | OWL Contenders",
    content:
      "Professional Overwatch team with exceptional coordination and game sense. Multiple season victories.",
    status: "Active",
    members: [
      { name: "Tank", role: "Tank Player" },
      { name: "DPS", role: "Damage Dealer" },
      { name: "Support", role: "Healer" },
    ],
    createdAt: new Date("2024-02-05"),
  },
  {
    name: "Team Zeta",
    title: "Fortnite Warriors",
    description:
      "FN Champion Squad | 25K+ combined hours | World Cup Finalists",
    content:
      "Elite Fortnite team with incredible building skills and game sense. Multiple cash cup victories.",
    status: "Active",
    members: [
      { name: "Builder", role: "Builder Pro" },
      { name: "Editor", role: "Edit Master" },
      { name: "Fighter", role: "Combat Specialist" },
    ],
    createdAt: new Date("2024-02-10"),
  },
];

// Players data
const playersData = [
  {
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

async function seedDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);

    // Clear existing data
    await db.collection("teams").deleteMany({});
    await db.collection("players").deleteMany({});
    console.log("Cleared existing data");

    // Insert teams data
    const teamsResult = await db.collection("teams").insertMany(teamsData);
    console.log(`Inserted ${teamsResult.insertedCount} teams`);

    // Insert players data
    const playersResult = await db
      .collection("players")
      .insertMany(playersData);
    console.log(`Inserted ${playersResult.insertedCount} players`);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
    console.log("Database connection closed");
  }
}

// Run the seeding function
seedDatabase();
