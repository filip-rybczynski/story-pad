import { auth } from "@clerk/nextjs";
import { SignedInAuthObject } from "@clerk/nextjs/server";
import { prisma } from "../db";

export const getUserByClerkID = async () => {
  const { userId } = (await auth()) as SignedInAuthObject;

  return await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });
};
