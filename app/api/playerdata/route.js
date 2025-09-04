export async function GET() {
  const dbConnection = await connectToDataBase();
  const items = await dbConnection
    .collection("player_stats")
    .find({})
    .toArray();

  return Response.json(items);
}
