import { Request, Response } from "express";
import { createCamp } from "./camp.service";

export const create = async (req: any, res: Response) => {
  try {
    const camp = await createCamp(req.body, req.user.id);
    res.json(camp);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};