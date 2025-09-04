import { NextResponse } from "next/server";

// Mock data - same as in main route
const mockData = [
  {
    _id: "1",
    name: "Player 1",
    title: "Frontend Developer",
    description:
      "Creative designer and frontend developer with 3 years experience.",
    content: "Specializes in React, Next.js, and modern web technologies.",
    createdAt: new Date("2024-01-15"),
  },
  {
    _id: "2",
    name: "Player 2",
    title: "Backend Specialist",
    description:
      "Backend specialist and API architect with expertise in Node.js.",
    content:
      "Focuses on scalable server architecture and database optimization.",
    createdAt: new Date("2024-01-20"),
  },
  {
    _id: "3",
    name: "Player 3",
    title: "Fullstack Developer",
    description:
      "Fullstack developer and project manager with 5 years experience.",
    content: "Leads development teams and manages complex web applications.",
    createdAt: new Date("2024-01-25"),
  },
  {
    _id: "4",
    name: "Player 4",
    title: "UI/UX Designer",
    description: "Creative UI/UX designer focused on user experience.",
    content: "Creates beautiful and intuitive user interfaces.",
    createdAt: new Date("2024-02-01"),
  },
  {
    _id: "5",
    name: "Player 5",
    title: "DevOps Engineer",
    description: "DevOps engineer specializing in cloud infrastructure.",
    content: "Manages deployment pipelines and cloud services.",
    createdAt: new Date("2024-02-05"),
  },
  {
    _id: "6",
    name: "Player 6",
    title: "Data Analyst",
    description: "Data analyst with expertise in business intelligence.",
    content: "Transforms data into actionable business insights.",
    createdAt: new Date("2024-02-10"),
  },
];

// GET single item
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

// PUT update item
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    const itemIndex = mockData.findIndex((item) => item._id === id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Update the item
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

// DELETE item
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const itemIndex = mockData.findIndex((item) => item._id === id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Remove the item
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
