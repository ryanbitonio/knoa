import mongoose from "mongoose";

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Card", cardsSchema);
