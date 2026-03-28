import { Request, Response } from "express";
import { createVisit } from "./visit.service";

export const create = async (req: any, res: Response) => {
  try {
    const visit = await createVisit(req.body, req.user.id);
    res.json(visit);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};