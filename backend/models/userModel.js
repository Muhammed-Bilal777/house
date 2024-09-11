import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength:14,
    select:false
  },
  email: {
    type: String,
    required: true,
    unique: true,
     
    
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 15
  }
});




userSchema.pre('save' , async function () {
    const user =this;
    if(!this.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPasswprd = await bcrypt.hash(user.password,salt)
    user.password=hashedPasswprd;
    
    
})

const User = mongoose.model('User', userSchema);

export default User;
