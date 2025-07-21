import bcrypt from "bcrypt";
import { getAllusers, adduser,findUser} from "../DAL/usersDAL.js";
//--------------------------------------------
export async function getusers(req, res) {
  try {
    const riddels = await getAllusers();
    res.json(riddels);
  } catch (err) {
    res.status(500).json({ error: "failed to get products" });
  }
}
//--------------------------------------------
export async function createUser(req, res) {
    const {username, password} = req.body;
  if (!username || !password) 
    return res.status(400).json({ error: "username and password are required" });
  try {
    const hash = await bcrypt.hash(password, 10);
    const result = await adduser({ username, hash });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "failed to add product" });
  }
}
//--------------------------------------------
export async function findUserByUsername(req, res) {
  const { username } = req.body;
  try {
    if (!username) return res.status(400).json({ error: "username is required" });
    const user = await findUser(username);
    if (!user) return res.status(404).json({ error: "user not found" });
    res.json("Verification was successful");
  } catch (err) {
    res.status(500).json({ error: "failed to find user" });
  }
}