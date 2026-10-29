import express from "express";
import "./common/db/connection.js";
import { userRouter } from "./app/User/user.route.js";
import { noteRouter } from "./app/Note/note.route.js";
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/notes", noteRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
