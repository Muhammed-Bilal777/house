import mongoose from "mongoose";

const booking = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    nowumber: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: new Date(Date.now()),
    },
    status: {
      type: String,
      enum: ['booked', 'confirmed'],
      default:'booked'
    }
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", booking);

export default Booking;
