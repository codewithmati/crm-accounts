import mongoose from 
async function dbconnect() {
  const uri = "mongodb://127.0.0.1:27017/accounts";
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(uri);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB Atlas!");
  });
}

export default dbconnect;
