import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/api";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const { id, emailAddresses } = (await currentUser()) as User;

  const match = await prisma.user.findUnique({
    where: {
      clerkId: id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: id,
        email: emailAddresses[0].emailAddress,
      },
    });
  }

  redirect("/pad");
};

const NewUser = async () => {
  console.log("start");
  await createNewUser();
  return null;
};

export default NewUser;
