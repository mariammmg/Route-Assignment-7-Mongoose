import { User } from "./user.model.js";
export async function findUserByemail(email) {
  const user = await User.findOne({ email });
  return user;
}
export async function CreateUser(name, phone,password, email, age) {
  const data = {
    name,
    phone,
    password,
    email,
    age,
  };
  const newUser = new User(data);
  const savedUser = await newUser.save();
  return savedUser;
}
export async function findUserById(id) {
  const user = await User.findById(id);
  return user;
}
export async function updateUser(id,name,email,age) {
    const user = await User.findOneAndUpdate(
  { _id: id },
  { $set: { name, email, age } },
  { new: true, runValidators: true }
);
    return user;
}
export async function deleteUser(id) {
  const user = await User.findByIdAndDelete(id);
  return user;
}
export async function findUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}


