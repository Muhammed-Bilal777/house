import Room from "../models/rooms.js";
import User from "../models/userModel.js";
import catchAsyncError from "../utils/catchAsyncError.js";
import sendError from "../utils/sendError.js";









//creating room
export const createRoom = catchAsyncError(async (req, res, next)=>{

    const {roomNumber ,capacity ,description, amenities } = req.body;
 if(!roomNumber || !capacity || !description || !amenities){
       return next(new sendError("Please provide all fields", 404))
    }


    const room = await Room.create({ roomNumber, capacity, description, amenities });
    res.status(200).send({
        message: "created room",
        room
    })
})


//updating room

export const updateRoom = catchAsyncError(async (req, res, next) => {
    const { phoneNumber } = req.body;
    const {id} = req.query



    const room = await Room.findById(id)

 if (!room) {
       return  next(new sendError("room not found" , 401))
    }

    const user = await User.findOne({ phoneNumber });
    console.log(user._id.toString());
    if (!user) {
       return next(new sendError("User not found" , 401))
    }

   let userExist = room.users.find((item) => item.toString() === user._id.toString());


    if (userExist) {
        return next(new sendError("user is already in room", 402))
    }



    room.users.push(user)

    await room.save();
    res.status(200).send({
        room,
    })
})


//get all rooms

export const getAllRooms = catchAsyncError(async (req, res, mnext) => {
    const rooms = await Room.find().populate('users')
    res.status(200).send({
        rooms
    })
})


//deleting user from room

export const deleteUserFromRoom = catchAsyncError(async (req, res, next) => {
    const { phoneNumber } = req.body;
    const {id} = req.query



    const room = await Room.findById(id)

 if (!room) {
       return  next(new sendError("room not found" , 401))
    }

    const user = await User.findOne({ phoneNumber });


    if (!user) {
       return next(new sendError("User not found" , 401))
    }






    const filteredUser = room.users.filter((item)=> item.toString() !== user._id.toString())
console.log(filteredUser);

      room.users =filteredUser
    await room.save();
    res.status(200).send({
        room,
    })
})

//get all users

export const getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find()
    res.status(200).send({
        users
    })
})