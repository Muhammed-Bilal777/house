import express from "express"
import {
  getMe,
  roomBooking,
  updateAvatar,
  UserInfo,
  userLogin,
  userLogout,
  UserProfile,
  userRegister,
} from "../controllers/userControllers.js";
import { isAuthenticated } from "../auth/auth.js";

const router = express.Router();

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);
router.route("/logout").get(userLogout);
router.route("/profile").get(isAuthenticated, UserProfile);
router.route("/details").post(isAuthenticated, UserInfo);
router.route("/booking").post(isAuthenticated, roomBooking);
router.route("/me").get(isAuthenticated, getMe);
router.route("/upload").put(isAuthenticated, updateAvatar);
export default router;