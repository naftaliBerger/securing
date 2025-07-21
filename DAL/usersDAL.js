import { connectDB } from "../DB/mongodb.js";
//--------------------------------------------
export async function getAllusers() {
  const db = await connectDB();
  return db.collection("users").find().toArray();
}
//--------------------------------------------
export async function adduser(report) {
  const db = await connectDB();
  return db.collection("users").insertOne(report);
}
//--------------------------------------------
export async function findUser(username) {
  const db = await connectDB();
  return db.collection("users").findOne({ username });
}
