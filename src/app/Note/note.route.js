import * as noteController from "./note.controller.js";
import { Router } from "express";
export const noteRouter = Router();

noteRouter.post("/", noteController.CreateNote);
noteRouter.patch("/all", noteController.updateAllNote);
noteRouter.patch("/:noteId", noteController.updateNote);
noteRouter.put("/:noteId", noteController.replaceNote);

noteRouter.delete("/", noteController.deleteAllNotes);
noteRouter.delete("/:noteId", noteController.deleteNote);
noteRouter.get("/aggregate", noteController.retrieveAllNoteswithUserinfo);
noteRouter.get("/paginate-sort",noteController.getUserNotes)
noteRouter.get("/note-content", noteController.getNotebyContent);
noteRouter.get("/note-with-user", noteController.getNoteswithUser);
noteRouter.get("/:id", noteController.getNotebyId);
