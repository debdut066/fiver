import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id : { type : mongoose.Schema.Types.ObjectId },
    username: { type: String, required: true, unqiue: true, trim: true },
    email: { type: String, required: true, unqiue: true },
    password: { type: String, required: true },
    img: { type: String, required: false },
    country: { type: String, required: false },
    phone: { type: Number, required: false },
    desc: { type: String, required: false },
    isSeller: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
