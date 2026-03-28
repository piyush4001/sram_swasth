import { prisma } from "../../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_secret_key";

export const registerUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      phone: data.phone,
      password: hashedPassword,
      role: data.role,
      district: data.district,
    },
  });

  return user;
};

export const loginUser = async (phone: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { phone },
  });

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { user, token };
};