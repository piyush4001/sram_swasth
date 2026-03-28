import { Request, Response } from "express";
import { generateReport } from "./report.service";
import { addDiagnosis } from "../visit/visit.service";

export const addDoctorDiagnosis = async (req: any, res: Response) => {
  try {
    const { visitId } = req.params;

    const visit = await addDiagnosis(
      visitId,
      req.user.id,
      req.body
    );

    res.json(visit);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const createReport = async (req: Request, res: Response) => {
  try {
    const { visitId } = req.params;

    const report = await generateReport(Array.isArray(visitId) ? visitId[0] : visitId);

    res.json(report);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};