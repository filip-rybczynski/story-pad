import { NextResponse } from "next/server";
import { createURL } from ".";
import { Analysis } from "../ai/promptSchema";

export const performAnalysis = async (title: string, content: string) => {
  const res = await fetch(
    new Request(createURL("/api/analysis"), {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    })
  );
  
  if (res.ok) {
    return (await res.json()) as Analysis;
    // } else throw new Error("oops");
  } else {
    console.log('🚀 ~ file: performAnalysis.ts:15 ~ performAnalysis ~ res:', res)
    throw new Error("Failed to analyze the story")
  }
};
