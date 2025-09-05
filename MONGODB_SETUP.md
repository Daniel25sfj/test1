# MongoDB Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up MongoDB

#### Option A: Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. Your `.env.local` is already configured for local MongoDB

#### Option B: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Update `.env.local`:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB=testing-items-database
```

### 3. Seed the Database

```bash
npm run seed
```

### 4. Start the Application

```bash
npm run dev
```

## 📁 Database Structure

### Collections Created:

- **`teams`** - Gaming teams data
- **`players`** - Individual player data

### Sample Data:

- 6 Gaming teams (CS2, Valorant, LoL, Apex, Overwatch, Fortnite)
- 6 Gaming players with detailed stats and achievements

## 🔧 API Endpoints

### Teams

- `GET /api/mongodb` - Get all teams
- `POST /api/mongodb` - Create new team

### Players

- `GET /api/playerdata` - Get all players

## 🛠️ Features

### Auto-Seeding

- If database is empty, it automatically seeds with mock data
- Fallback to mock data if database connection fails

### Real-time Updates

- All CRUD operations work with MongoDB
- Data persists between sessions

## 🔍 Troubleshooting

### Connection Issues

1. Check if MongoDB is running
2. Verify connection string in `.env.local`
3. Check firewall settings

### Data Not Loading

1. Run `npm run seed` to populate database
2. Check browser console for errors
3. Verify API endpoints are working

## 📊 Data Schema

### Team Document

```javascript
{
  name: String,
  title: String,
  description: String,
  content: String,
  status: String,
  members: [{ name: String, role: String }],
  createdAt: Date
}
```

### Player Document

```javascript
{
  name: String,
  title: String,
  description: String,
  content: String,
  game: String,
  rank: String,
  hours: Number,
  role: String,
  achievements: [String],
  createdAt: Date
}
```

## 🎮 Gaming Data Included

### Teams:

- Team Alpha (CS2 Pro Team)
- Team Beta (Valorant Champions)
- Team Gamma (League of Legends Squad)
- Team Delta (Apex Legends Predators)
- Team Epsilon (Overwatch Champions)
- Team Zeta (Fortnite Warriors)

### Players:

- ShadowStrike (CS2 Global Elite)
- PhoenixRush (Valorant Radiant)
- MidLaneKing (LoL Challenger)
- WraithMain (Apex Predator)
- TracerGod (OW Top 500)
- BuilderPro (Fortnite Champion)

## 🚀 Next Steps

1. **Customize Data**: Modify the seed script to add your own teams/players
2. **Add More Collections**: Create new API routes for different data types
3. **User Authentication**: Integrate with Clerk for user-specific data
4. **Real-time Updates**: Add WebSocket support for live updates
5. **Advanced Queries**: Add filtering, sorting, and pagination

## 📝 Notes

- The application automatically falls back to mock data if MongoDB is unavailable
- All gaming data is realistic and includes proper statistics
- The database will be automatically seeded on first run
- You can re-seed the database anytime with `npm run seed`
