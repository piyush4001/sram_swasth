import express from "express";
import {
  registerPatient,
  approve,
  scanQR,
} from "./patient.controller";
import { authenticate, authorizeRoles } from "../../middleware/auth.middleware";

const router = express.Router();

// register patient
router.post("/", authenticate, registerPatient);

// admin approves patient
router.put(
  "/approve/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  approve
);

// field staff scans QR
router.post(
  "/scan",
  authenticate,
  authorizeRoles("FIELD_STAFF"),
  scanQR
);

export default router;