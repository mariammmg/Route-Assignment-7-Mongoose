import * as userService from "./user.service.js";


export async function SignUp(req, res) {
  const { name, phone, email, password, age } = req.body;
  try {
    const newUser = await userService.SignUp(name, phone, email, password, age);
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function SignIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userService.SignIn(email, password);
    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function updateUser(req, res) {
  const { name, email, age } = req.body;
  const { id } = req.params;
  try {
    const updatedUser = await userService.updateUser(id, name, email, age);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function deleteUser(req, res) {
  const { id } = req.query;
  try {
    const deletedUser = await userService.deleteUser(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function findUserById(req, res) {
  const { id } = req.query;
  try {
    const user = await userService.findUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}