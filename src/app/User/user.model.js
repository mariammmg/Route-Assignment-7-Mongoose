import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true, 
      required: true
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 128,
    },
    email: {
      type: String,
      required: true
    },
    age:{
        type: Number,
        min: 18,
        max:60
    }
  },
  {
    timestamps: true,
  }
);

export const User = model("User", schema);

