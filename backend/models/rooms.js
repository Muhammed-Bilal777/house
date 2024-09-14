import mongoose from "mongoose";


const room = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      unique: true
    },

    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    }],
    capacity: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    amenities: [{
      type: String
    }]
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", room);

export default Room;