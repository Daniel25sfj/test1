import { NextResponse } from "next/server";

// Mock data - same as in main route
const mockData = [
  {
    _id: "1",
    name: "Player 1",
    title: "CS2 Global Elite",
    description: "CS2 Global Elite | 2.5K hours | AWP Main | Rank S Player",
    content:
      "Elite Counter-Strike 2 player specializing in AWP sniping. Known for clutch plays and tactical positioning.",
    createdAt: new Date("2024-01-15"),
  },
  {
    _id: "2",
    name: "Player 2",
    title: "Valorant Radiant",
    description: "Valorant Radiant | 1.8K hours | Jett Main | Pro Team Captain",
    content:
      "Top-tier Valorant player with exceptional movement and aim. Leads professional team with aggressive playstyle.",
    createdAt: new Date("2024-01-20"),
  },
  {
    _id: "3",
    name: "Player 3",
    title: "LoL Challenger",
    description:
      "League of Legends Challenger | 3.2K hours | Mid Lane | 1v9 Carry",
    content:
      "Elite League of Legends mid laner with exceptional mechanical skills and game sense. Known for carrying games.",
    createdAt: new Date("2024-01-25"),
  },
  {
    _id: "4",
    name: "Player 4",
    title: "Apex Predator",
    description:
      "Apex Legends Predator | 1.5K hours | Wraith Main | 20 Bomb Record",
    content:
      "Dominant Apex Legends player with incredible movement and positioning. Holds multiple kill records.",
    createdAt: new Date("2024-02-01"),
  },
  {
    _id: "5",
    name: "Player 5",
    title: "OW Top 500",
    description: "Overwatch Top 500 | 2.1K hours | Tracer Main | OWL Contender",
    content:
      "Professional Overwatch player with exceptional tracking and positioning. Competing in OWL circuits.",
    createdAt: new Date("2024-02-05"),
  },
  {
    _id: "6",
    name: "Player 6",
    title: "Fortnite Champion",
    description:
      "Fortnite Champion | 4.0K hours | Builder Pro | World Cup Qualifier",
    content:
      "Elite Fortnite player with incredible building skills and game sense. Multiple tournament victories.",
    createdAt: new Date("2024-02-10"),
  },
];

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const item = mockData.find((item) => item._id === id);

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    return NextResponse.json(
      { error: "Failed to fetch item" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const itemIndex = mockData.findIndex((item) => item._id === id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    const updatedItem = {
      ...mockData[itemIndex],
      ...body,
      updatedAt: new Date(),
    };

    mockData[itemIndex] = updatedItem;

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const itemIndex = mockData.findIndex((item) => item._id === id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    const deletedItem = mockData.splice(itemIndex, 1)[0];

    return NextResponse.json(
      { message: "Item deleted successfully", deletedItem },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting item:", error);
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
