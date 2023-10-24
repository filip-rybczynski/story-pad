import { StoryData } from "@/components/EditorForm/types/StoryData.interface";
import { analyze } from "@/utils/ai";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const req: StoryData = await request.json();

  const response = await analyze(req.title, req.content);

  return NextResponse.json(response);
};
