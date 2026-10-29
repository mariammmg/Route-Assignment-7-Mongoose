import e from "express";
import * as noteService from "./note.service.js";

export async function CreateNote(req, res) {
  const { title, content } = req.body;
  const { userId } = req.query;
  try {
    const newNote = await noteService.CreateNote(title, content, userId);
    res.status(201).json({ message: "Note created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function updateNote(req, res) {
  const { noteId } = req.params;
  const { title, content } = req.body;
  const { userId } = req.query;
  try {
    const updatedNote = await noteService.updateNote(noteId, title, content, userId);
    res.status(200).json({ message: "updated",note: updatedNote });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function replaceNote(req, res) {
  const { noteId } = req.params;
  const { loggedId } = req.query;
  const { title, content, userId } = req.body;
  try {
    const replacedNote = await noteService.replaceNote(noteId, title, content, userId, loggedId);
    res.status(200).json(replacedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function updateAllNote(req, res) {
  const { userId,title } = req.query;
  try {
    const updatedNotes = await noteService.updateAllNote(title, userId);
    res.status(200).json({ message: "All notes updated"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function deleteNote(req, res) {
  const { noteId } = req.params;
  const { userId } = req.query;
  try {
    const deletedNote = await noteService.deleteNote(noteId,userId);
    res.status(200).json({ message: "deleted",note: deletedNote });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function deleteAllNotes(req, res) {
  const { userId } = req.query;
  try {
    const deletedNotes = await noteService.DeleteAllNotes(userId);
    res.status(200).json({ message: "All notes deleted"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function retrieveAllNoteswithUserinfo(req, res) {
  const { userId,title } = req.query;
  try {
    const notes = await noteService.retrieveAllNoteswithUserinfo(title, userId);
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function getUserNotes(req, res) {
  const { userId } = req.query;
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const notes = await noteService.getUserNotes(userId,page,limit);
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function getNotebyId(req, res) {
  const { id } = req.params;
  const { userId } = req.query;
  try {
    const note = await noteService.getNotebyId(id,userId);
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function getNotebyContent(req, res) {
  
  const { userId ,content } = req.query;
  try {
    const notes = await noteService.getNotebyContent(userId,content);
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function getNoteswithUser(req, res) {
  const { userId } = req.query;
  try {
    const notes = await noteService.getNoteswithUser(userId);
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

