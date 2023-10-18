import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkID();

  const story = await prisma.story.create({
    data: {
      userId: user.id,
      storyContent: "",
      storyTitle: "New Story",
    },
  });

  return NextResponse.json(story)
};
