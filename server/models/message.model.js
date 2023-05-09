import mongoose from "mongoose";
const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    conversationId: { type: mongoose.Schema.Types.ObjectId, ref : "Conversation", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref : "User", required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
