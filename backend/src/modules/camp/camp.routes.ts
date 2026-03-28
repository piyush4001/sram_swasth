import express from "express";
import { create } from "./camp.controller";
import { authenticate, authorizeRoles } from "../../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeRoles("VENDOR"),
  create
);

export default router;