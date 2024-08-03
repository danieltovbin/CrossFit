import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

export const Equipment = mongoose.model("Equipment", equipmentSchema);
