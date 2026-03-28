import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;
    const result = await loginUser(phone, password);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};