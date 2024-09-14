import mongoose from 'mongoose';

const userDetailsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
    },
    identification: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ["WORKING", "STUDENT"],
    },
    address: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

export default UserDetails;