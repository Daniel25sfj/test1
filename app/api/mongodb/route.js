import { NextResponse } from 'next/server';

// Mock data for now - replace with actual MongoDB connection
const mockData = [
  {
    _id: '1',
    name: 'Player 1',
    title: 'Frontend Developer',
    description: 'Creative designer and frontend developer with 3 years experience.',
    content: 'Specializes in React, Next.js, and modern web technologies.',
    createdAt: new Date('2024-01-15'),
  },
  {
    _id: '2', 
    name: 'Player 2',
    title: 'Backend Specialist',
    description: 'Backend specialist and API architect with expertise in Node.js.',
    content: 'Focuses on scalable server architecture and database optimization.',
    createdAt: new Date('2024-01-20'),
  },
  {
    _id: '3',
    name: 'Player 3', 
    title: 'Fullstack Developer',
    description: 'Fullstack developer and project manager with 5 years experience.',
    content: 'Leads development teams and manages complex web applications.',
    createdAt: new Date('2024-01-25'),
  },
  {
    _id: '4',
    name: 'Player 4',
    title: 'UI/UX Designer',
    description: 'Creative UI/UX designer focused on user experience.',
    content: 'Creates beautiful and intuitive user interfaces.',
    createdAt: new Date('2024-02-01'),
  },
  {
    _id: '5',
    name: 'Player 5',
    title: 'DevOps Engineer',
    description: 'DevOps engineer specializing in cloud infrastructure.',
    content: 'Manages deployment pipelines and cloud services.',
    createdAt: new Date('2024-02-05'),
  },
  {
    _id: '6',
    name: 'Player 6',
    title: 'Data Analyst',
    description: 'Data analyst with expertise in business intelligence.',
    content: 'Transforms data into actionable business insights.',
    createdAt: new Date('2024-02-10'),
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Error fetching MongoDB data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Add new item to mock data
    const newItem = {
      _id: Date.now().toString(),
      ...body,
      createdAt: new Date(),
    };
    
    mockData.push(newItem);
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating MongoDB data:', error);
    return NextResponse.json(
      { error: 'Failed to create data' },
      { status: 500 }
    );
  }
}
