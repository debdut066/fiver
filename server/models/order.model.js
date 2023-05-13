import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    gigId: { type: mongoose.Schema.Types.ObjectId, ref : "Gig", required: true },
    img: { type: String, required: false },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    sellerId: { type: String, required: true },
    buyerId: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    payment_intent: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
