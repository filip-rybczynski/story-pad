import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const user = await getUserByClerkID();

  const req = await request.json();

  const story = await prisma.story.create({
    data: {
      userId: user.id,
      storyContent: req?.content || "",
      storyTitle: req?.title || "New Story",
    },
  });

  return NextResponse.json(story);
};
