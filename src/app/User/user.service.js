import * as userRepo from "./user.repository.js";
import bcrypt from "bcrypt";
export async function SignUp(name, phone, email,password, age) {
    const user = await userRepo.findUserByemail(email);
    if(user){
        throw new Error("Email already exists");
    }
    
    const newUser = await userRepo.CreateUser(name, phone, password,email, age);
    return newUser;
}
export async function SignIn(email, password) {
    const user = await userRepo.findUserByemail(email);
    if(!user || user.password !== password){
        throw new Error("Invalid email or password");
    }
    return user;
}
export async function updateUser(id,name,email,age) {
    const user = await userRepo.findUserById(id);
    if(!user){
        throw new Error("User not found");
    }
    if (email && user.email !== email) {
  const existingUser = await userRepo.findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }
}
    const updatedUser = await userRepo.updateUser(id,name,email,age);
    return updatedUser;
}
export async function deleteUser(id) {
    const user = await userRepo.deleteUser(id);
    if(!user){
        throw new Error("User not found");
    }
    return user;
}
export async function findUserById(id) {
    const user = await userRepo.findUserById(id);
    if(!user){
        throw new Error("User not found");
    }
    return user;
}
