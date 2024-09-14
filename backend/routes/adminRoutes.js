import express from "express"
import { isAuthenticated, isAuthorize } from "../auth/auth.js";
import { createRoom, deleteUser, deleteUserFromRoom, getAllRooms, getAllUsers, updateRoom, userDetail } from "../controllers/adminController.js";






const router = express.Router();

router.route('/admin/rooms').post(isAuthenticated, isAuthorize('admin'), createRoom)

router.route('/admin/rooms/update').put(isAuthenticated, isAuthorize('admin'), updateRoom)
router.route('/admin/rooms').get(isAuthenticated, isAuthorize('admin'), getAllRooms)
router.route('/admin/users').get(isAuthenticated, isAuthorize('admin'), getAllUsers)
router.route('/admin/rooms/delete').put(isAuthenticated, isAuthorize('admin'), deleteUserFromRoom)
router.route('/admin/users/:id').get(isAuthenticated, isAuthorize('admin'),userDetail )
router.route('/admin/users/:id').delete(isAuthenticated, isAuthorize('admin'),deleteUser )
export default router;