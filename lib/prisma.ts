import { PrismaClient } from "@/app/generated/prisma"; // ✅ correct path

const prisma = new PrismaClient();
export { prisma };
