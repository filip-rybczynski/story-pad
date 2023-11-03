import { qa } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { question } = await request.json();
  const user = await getUserByClerkID();

  const stories = await prisma.story.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      createdAt: true,
      storyTitle: true,
      storyContent: true,
      analysis: {
        select: {
          atmosphere: true,
          moral: true,
          genreTags: true,
          keyThemes: true,
        },
      },
    },
  });

  const answer = await qa(question, stories);

  return NextResponse.json(answer);
};
