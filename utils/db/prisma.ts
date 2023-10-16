import { PrismaClient } from "@prisma/client";

// For purposes of development (or testing), ensure we only have one instance of the Prisma client globally

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; // exclude PROD env
