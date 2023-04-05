import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    username: { type: String, required: true, unqiue: true, trim: true },
    email: { type: String, required: true, unqiue: true },
    password: { type: password, required: true },
    img: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    desc: { type: String, required: true },
    isSeller: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
