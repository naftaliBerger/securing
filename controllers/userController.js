import bcrypt from "bcrypt";
import { getAllusers, adduser} from "../DAL/usersDAL.js";
//--------------------------------------------
export async function getusers(req, res) {
  try {
    const riddels = await getAllusers();
    res.json(riddels);
  } catch (err) {
    res.status(500).json({ error: "Failed to get products" });
  }
}
//--------------------------------------------
export async function createUser(req, res) {
    const {username, password} = req.body;
  if (!username || !password) 
    return res.status(400).json({ error: "Username and password are required" });
  try {
    const hash = await bcrypt.hash(password, 10);
    const result = await adduser({ username, hash });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
}