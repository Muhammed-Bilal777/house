import jwt from 'jsonwebtoken';
import catchAsyncError from './catchAsyncError.js';

export const sendToken =catchAsyncError( (user, statusCode,res) => {
  // Create a payload with the user's ID
  const payload = {
    id: user._id
  };

  // Generate a JSON Web Token with the payload
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  // Set the token in a cookie or send it in the response
  res.status(statusCode).cookie('token', token, {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
    httpOnly: true
  }).json({
    message : "Succesfully logged in",
    success: true,
    token,
    user
  });
});