import { NextResponse } from "next/server";
import { connectToDataBase } from "@/lib/mongodb";

const mockData = [
  {
    _id: "1",
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
    _id: "2",
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
    _id: "3",
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
    _id: "4",
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
    _id: "5",
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
    _id: "6",
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

export async function GET() {
  try {
    const db = await connectToDataBase();

    if (!db) {
      throw new Error("Database connection failed");
    }

    const collection = db.collection("teams");
    const teams = await collection.find({}).toArray();

    if (teams.length === 0) {
      console.log("No teams found, seeding database...");
      await collection.insertMany(mockData);
      return NextResponse.json(mockData);
    }

    return NextResponse.json(teams);
  } catch (error) {
    console.error("Error fetching MongoDB data:", error);

    return NextResponse.json(mockData);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const db = await connectToDataBase();

    if (!db) {
      throw new Error("Database connection failed");
    }

    const collection = db.collection("teams");

    // Create new team document
    const newTeam = {
      ...body,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newTeam);
    newTeam._id = result.insertedId;

    return NextResponse.json(newTeam, { status: 201 });
  } catch (error) {
    console.error("Error creating MongoDB data:", error);
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}
