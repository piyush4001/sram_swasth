import express from "express";
import { register, login } from "./auth.controller";
import { authenticate, authorizeRoles } from "../../middleware/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// 🔒 Example protected route
router.get(
  "/admin-only",
  authenticate,
  authorizeRoles("ADMIN"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

export default router;