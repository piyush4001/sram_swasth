import express from "express";
import {
  addDoctorDiagnosis,
  createReport,
} from "./report.controller";

import { authenticate, authorizeRoles } from "../../middleware/auth.middleware";

const router = express.Router();

// doctor adds diagnosis
router.put(
  "/diagnosis/:visitId",
  authenticate,
  authorizeRoles("DOCTOR"),
  addDoctorDiagnosis
);

// generate report
router.post(
  "/:visitId",
  authenticate,
  authorizeRoles("DOCTOR"),
  createReport
);

export default router;