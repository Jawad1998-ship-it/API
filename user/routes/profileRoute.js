import express from "express";
import { getUserProfile } from "../controllers/profileController.js";
import { updateUserProfile } from "../controllers/updateController.js";
import { protect } from "../../middlewares/loginCheker/UserAuth.js";

const router = express.Router();

router.route("/profile")
.get(protect, getUserProfile)
.put(protect, updateUserProfile);

export default router;
