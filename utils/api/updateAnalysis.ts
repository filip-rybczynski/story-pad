import { AnalysisContent } from "@/types/AnalysisContent";
import { createURL } from ".";
import { Analysis } from "@prisma/client";

export const updateAnalysis = async (analysis: AnalysisContent, id: string) => {

  const init = {
    method: "PATCH",
    body: JSON.stringify(analysis),
  }

  const res = await fetch(
    new Request(createURL(`/api/analysis/${id}`), init)
  );

  if (res.ok) {
    return (await res.json()) as Analysis;
  }
};
