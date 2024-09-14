import express from "express"
import { isAuthenticated, isAuthorize } from "../auth/auth.js";
import { createRoom, deleteUserFromRoom, getAllRooms, getAllUsers, updateRoom } from "../controllers/adminController.js";






const router = express.Router();

router.route('/admin/rooms').post(isAuthenticated, isAuthorize('admin'), createRoom)

router.route('/admin/rooms/update').put(isAuthenticated, isAuthorize('admin'), updateRoom)
router.route('/admin/rooms').get(isAuthenticated, isAuthorize('admin'), getAllRooms)
router.route('/admin/users').get(isAuthenticated, isAuthorize('admin'), getAllUsers)
router.route('/admin/rooms/delete').put(isAuthenticated, isAuthorize('admin'),deleteUserFromRoom )
export default router;