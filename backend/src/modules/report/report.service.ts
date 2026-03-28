import { prisma } from "../../config/prisma";

export const generateReport = async (visitId: string) => {
  const visit = await prisma.visit.findUnique({
    where: { id: visitId },
  });

  if (!visit || !visit.diagnosis) {
    throw new Error("Diagnosis not completed");
  }

  const report = await prisma.report.create({
    data: {
      visitId,
      patientId: visit.patientId,
      diagnosis: visit.diagnosis,
      prescription: visit.prescription!,
    },
  });

  // 🔥 Update patient's last checkup date
  await prisma.patient.update({
    where: { id: visit.patientId },
    data: {
      lastCheckupDate: new Date(),
    },
  });

  return report;
};