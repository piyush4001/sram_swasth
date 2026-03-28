import { Request, Response } from "express";
import {
  createPatient,
  approvePatient,
  getPatientByQR,
} from "./patient.service";

export const registerPatient = async (req: Request, res: Response) => {
  try {
    const patient = await createPatient(req.body);
    res.json(patient);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const approve = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const patientId = Array.isArray(id) ? id[0] : id;
    const patient = await approvePatient(patientId);
    res.json(patient);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const scanQR = async (req: Request, res: Response) => {
  try {
    const { qrData } = req.body;
    const patient = await getPatientByQR(qrData);
    res.json(patient);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};