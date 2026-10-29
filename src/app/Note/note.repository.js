import { Note } from "./note.model.js";
export async function CreateNote(title, content, userId) {
  const data = {
    title,
    content,
    userId,
  };
  const newNote = new Note(data);
  const savedNote = await newNote.save();
  return savedNote;
}
export async function findNoteById(id) {
  const note = await Note.findById(id);
  console.log(note);
  return note;
}

export async function updateNote(id, title, content) {
  const note = await Note.findByIdAndUpdate(
    id,
    { title, content },
    { new: true },
    {runValidators: true}
  );
  return note;
}
export async function DeleteNote(id) {
  const note = await Note.findByIdAndDelete(id);
  return note;
}
export async function replaceNote(id, title, content, userId) {
  const note = await Note.findOneAndReplace(
    {_id:id},
    { title, content, userId },
    { new: true, runValidators: true },
  );
  return note;
}
export async function updateAllNote(title, userId) {
  const notes = await Note.updateMany(
    { userId },
    { $set: { title } },
    { runValidators: true },
  );
  return notes;
}
export async function findAllNotesbyUserId(userId) {
  const notes = await Note.find({ userId });
  return notes;
}
export async function DeleteAllNotes(userId) {
  const notes = await Note.deleteMany({ userId });
  return notes;
}
export async function RetrieveAllNoteswithUserinfo(title) {
  const pipeline = [];

  if (title) {
    pipeline.push({
      $match: {
        title: { $regex: title, $options: "i" }
      }
    });
  }

  pipeline.push(
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      }
    },
    { $unwind: "$user" },
    {
      $project: {
        _id: 0,
        title: 1,
        userId: 1,
        createdAt: 1,
        "user.name": 1,
        "user.email": 1
      }
    }
  );

  return await Note.aggregate(pipeline);
}

export async function getUserNotes(userId, page,limit) {
  const notes = await Note.find({ userId })
    .skip((page - 1) * limit)
    .limit(limit).sort({ createdAt: -1 });

  return notes;
}
export async function getNotebyContent(userId,content){
  const notes = await Note.find({ userId,content })
  return notes;
}
export async function getNoteswithUser(userId){
  const notes = await Note.find({ userId })
    .select("_id title createdAt")
    .populate("userId", "email -_id");
  return notes;
}


