import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

type PatchParams = { params: { id: string } };

export const PATCH = async (request: Request, { params }: PatchParams) => {
  const user = (await getUserByClerkID()) as User;
  const { title, content } = await request.json();
  const updatedStory = await prisma.story.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      storyTitle: title,
      storyContent: content,
    },
  });

  return NextResponse.json(updatedStory);
};
