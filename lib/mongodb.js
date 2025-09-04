import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI;

const dbName = "testing-items-database";

const client = new MongoClient(uri);

export async function connectToDataBase() {
  try {
    await client.connect();
    return client.db(dbName);
  } catch (err) {
    console.error(err);
  }
}