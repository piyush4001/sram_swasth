import { prisma } from "../../config/prisma";

export const createCamp = async (data: any, vendorId: string) => {
  return await prisma.camp.create({
    data: {
      name: data.name,
      location: data.location,
      date: new Date(data.date),
      tier: data.tier,
      vendorId,
    },
  });
};