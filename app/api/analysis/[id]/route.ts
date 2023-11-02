import { AnalysisContent } from "@/types/AnalysisContent";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

type ReqParams = { params: { id: string } };

export const PATCH = async (request: Request, { params }: ReqParams) => {
  const analysis = await request.json();

  const updatedStory = await prisma.analysis.upsert({
    where: {
      storyId: params.id,
    },
    create: {
      storyId: params.id,
      ...(analysis as AnalysisContent),
    },
    update: {
      ...(analysis as AnalysisContent),
    },
  });

  return NextResponse.json(updatedStory);
};

export const GET = async (req: Request, { params }: ReqParams) => {
  console.log("searching for analysis!");
  const analysis = await prisma.analysis.findUnique({
    where: {
      storyId: params.id,
    },
  });

  console.log(analysis);

  return NextResponse.json(analysis);
};
