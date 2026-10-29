import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      validate: {
        validator: function (title) {
          return title.toUpperCase() !== title;
        },
        message: "Not all the letters should be in uppercase",
      },
    },
    content: { type: String, required: true, minlength: 3 },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  },
);
export const Note = model("Note", schema);
