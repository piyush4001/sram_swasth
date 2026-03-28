import { prisma } from "../../config/prisma";

export const createVisit = async (data: any, fieldStaffId: string) => {
  const patient = await prisma.patient.findUnique({
    where: { id: data.patientId },
  });

  if (!patient) throw new Error("Patient not found");

  // 🔥 365-day check
  if (patient.lastCheckupDate) {
    const diff = Date.now() - new Date(patient.lastCheckupDate).getTime();
    const days = diff / (1000 * 60 * 60 * 24);

    if (days < 365) {
      throw new Error("Patient not eligible (365-day rule)");
    }
  }

  const visit = await prisma.visit.create({
    data: {
      patientId: data.patientId,
      campId: data.campId,
      fieldStaffId,
      tier: data.tier,
      formData: data.formData,
      gpsLat: data.gpsLat,
      gpsLng: data.gpsLng,
      photoUrl: data.photoUrl,
    },
  });

  return visit;
};

export const addDiagnosis = async (
  visitId: string,
  doctorId: string,
  data: any
) => {
  const visit = await prisma.visit.update({
    where: { id: visitId },
    data: {
      doctorId,
      diagnosis: data.diagnosis,
      prescription: data.prescription,
    },
  });

  return visit;
};