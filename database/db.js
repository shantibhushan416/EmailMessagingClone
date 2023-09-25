import mongoose from "mongoose";

const Connection = async (username,password) => {
  const DB_URI = `mongodb+srv://${username}:${password}@gmailclone.bteqmiy.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database connected Successfully.");
  } catch (error) {
    console.log(`Failed to connect to Mongodb: ${error.message}`);
  }
};

export default Connection;
