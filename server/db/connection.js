import { MongoClient, ServerApiVersion } from "mongodb";

let client = null;
let db = null;

async function initDB() {
  if (db) return db;
  
  const uri = process.env.ATLAS_URI;
  if (!uri) {
    throw new Error("ATLAS_URI environment variable is not set");
  }
  
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    db = client.db("employees");
    return db;
  } catch(err) {
    console.error(err);
    throw err;
  }
}

export default initDB;