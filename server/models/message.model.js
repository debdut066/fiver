import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    conversationId: { type: String, required: true },
    userId: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
