import { Story } from "@prisma/client";
import { prisma } from "./db";

export const getUsersStoryByID = async (userID: string, id: string | undefined) => {
  if (id) {
    const existingStory = await prisma.story.findUnique({
      where: {
        id: id,
        userId: userID,
      },
    });
    return existingStory as Story;
  }
};
