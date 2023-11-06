import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/api";
import { redirect } from "next/navigation";

const searchUserInDB = async () => {
  // confirm('OK to proceed?');
  console.log("verify user");
  const { id } = (await currentUser()) as User;

  const match = await prisma.user.findUnique({
    where: {
      clerkId: id as string,
    },
  });
  console.log("🚀 ~ file: page.tsx:14 ~ searchUserInDB ~ match:", match);

  if (match) redirect("/stories");

  console.log("redirecting to new-user");
  if (!match) redirect("/new-user");
};

const VerifyUser = async () => {
  await searchUserInDB();
  return null;
};

export default VerifyUser;
