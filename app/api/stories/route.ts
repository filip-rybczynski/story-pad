import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkID();

  const story = await prisma.story.create({
    data: {
      userId: user.id,
      storyContent: "",
      storyTitle: "",
    },
  });

  return NextResponse.json(story)
};
