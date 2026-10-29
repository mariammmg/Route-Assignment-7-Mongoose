import * as noteRepo from "./note.repository.js";
import * as userRepo from "../User/user.repository.js";
export async function CreateNote(title, content, userId) {
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const note = await noteRepo.CreateNote(title, content, userId);
  return note;
}
export async function updateNote(id, title, content, userId) {
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const Note = await noteRepo.findNoteById(id);
  if (!Note) {
    throw new Error("Note not found");
  }
  if (Note.userId.toString() !== userId) {
    throw new Error("You are not the owner of this note");
  }
  
  const updatednote = await noteRepo.updateNote(id, title, content);
  return updatednote;
}
export async function replaceNote(id, title, content, userId, loggedId) {
  const user = await userRepo.findUserById(loggedId);
  if (!user) {
    throw new Error("User not found");
  }
  const Note = await noteRepo.findNoteById(id);
  if (!Note) {
    throw new Error("Note not found");
  }
  if (Note.userId.toString() !== loggedId) {
    throw new Error("You are not the owner of this note");
  }
  if(userId !== loggedId){
     throw new Error("You are not the owner of this note");
  }
  /*
  const newuser=await userRepo.findUserById(userId);
  if (!newuser) {
    throw new Error("new User to add note not found");
  }*/
  const updatednote = await noteRepo.replaceNote(id, title, content, userId);
  return updatednote;
}
export async function updateAllNote(title, userId) {
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const Notes = await noteRepo.findAllNotesbyUserId(userId);
  if (!Notes) {
    throw new Error("no notes found");
  }
  const notes = await noteRepo.updateAllNote(title,userId);
  return notes;
}
export async function DeleteAllNotes(userId) {
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const Notes = await noteRepo.findAllNotesbyUserId(userId);
  if (Notes.length === 0) {
    throw new Error("no notes found");
  }
  const DeletedNotes = await noteRepo.DeleteAllNotes(userId);
  return DeletedNotes;
}
export async function deleteNote(id,userId) {
    const user = await userRepo.findUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const Note = await noteRepo.findNoteById(id);
    if (!Note) {
      throw new Error("Note not found");
    }
    if (Note.userId.toString() !== userId) {
      throw new Error("You are not the owner of this note");
    }
    const deletedNote = await noteRepo.DeleteNote(id);
    return deletedNote;
}
export async function retrieveAllNoteswithUserinfo(title,userId)
{
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const notes = await noteRepo.RetrieveAllNoteswithUserinfo(title);
  if (notes.length === 0) {
    throw new Error("no notes found");
  }
  return notes;
}
export async function getUserNotes(userId,page,limit) {
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const notes = await noteRepo.getUserNotes(userId,page,limit);
  if (!notes) {
    throw new Error("no notes found");
  }
  return notes;
}
export async function getNotebyId(id,userId){
  const user = await userRepo.findUserById(userId);
    if (!user) {
      throw new Error("User not found");
    }
  const note = await noteRepo.findNoteById(id);
  if (!note) {
    throw new Error("Note not found");
  }
  if (note.userId.toString() !== userId) {
      throw new Error("You are not the owner of this note");
    }
  return note;
}
export async function getNotebyContent(userId,content){
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const notes = await noteRepo.getNotebyContent(userId,content);
  if (notes.length === 0) {
    throw new Error("no note found");
  }
  return notes;
}
export async function getNoteswithUser(userId){
  const user = await userRepo.findUserById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  const notes = await noteRepo.getNoteswithUser(userId);
  if (notes.length === 0) {
    throw new Error("no note found");
  }
  return notes;
}