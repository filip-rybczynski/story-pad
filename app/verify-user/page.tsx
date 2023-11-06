import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/api";
import { redirect } from "next/navigation";

const searchUserInDB = async () => {
  const { id } = (await currentUser()) as User;

  const match = await prisma.user.findUnique({
    where: {
      clerkId: id as string,
    },
  });

  if (match) redirect("/stories");

  if (!match) redirect("/new-user");
};

const VerifyUser = async () => {
  await searchUserInDB();
  return null;
};

export default VerifyUser;
