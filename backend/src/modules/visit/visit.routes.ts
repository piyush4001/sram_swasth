import express from "express";
import { create } from "./visit.controller";
import { authenticate, authorizeRoles } from "../../middleware/auth.middleware";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorizeRoles("FIELD_STAFF"),
  create
);

export default router;