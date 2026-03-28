import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import patientRoutes from "./modules/patient/patient.routes";
import campRoutes from "./modules/camp/camp.routes";
import visitRoutes from "./modules/visit/visit.routes";

import reportRoutes from "./modules/report/report.routes";
const app = express();

app.use(express.json());


app.use("/api/patient", patientRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/camp", campRoutes);
app.use("/api/visit", visitRoutes);


app.use("/api/report", reportRoutes);
export default app;