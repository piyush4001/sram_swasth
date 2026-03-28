import { prisma } from "../../config/prisma";
import QRCode from "qrcode";

export const createPatient = async (data: any) => {
  const patient = await prisma.patient.create({
    data: {
      userId: data.userId,
      samagraId: data.samagraId,
      abhaId: data.abhaId,
    },
  });

  return patient;
};

export const approvePatient = async (patientId: string) => {
  // generate QR after approval
  const qrData = `PATIENT:${patientId}`;

  const qrCode = await QRCode.toDataURL(qrData);

  const updated = await prisma.patient.update({
    where: { id: patientId },
    data: {
      isApproved: true,
      qrCode,
    },
  });

  return updated;
};

export const getPatientByQR = async (qrData: string) => {
  const patientId = qrData.split(":")[1];

  const patient = await prisma.patient.findUnique({
    where: { id: patientId },
    include: { user: true },
  });

  if (!patient) throw new Error("Patient not found");

  return patient;
};