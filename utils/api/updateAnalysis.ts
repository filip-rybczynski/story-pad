import { AnalysisContent } from "@/types/AnalysisContent";
import { createURL } from ".";
import { Analysis } from "@prisma/client";

export const updateAnalysis = async (analysis: AnalysisContent, id: string) => {
  console.log('🚀 ~ file: updateAnalysis.ts:6 ~ updateAnalysis ~ id:', id)
  console.log('🚀 ~ file: updateAnalysis.ts:6 ~ updateAnalysis ~ analysis:', analysis)
  console.log("inside the util function...");

  const init = {
    method: "PATCH",
    body: JSON.stringify(analysis),
  }
  console.log('🚀 ~ file: updateAnalysis.ts:14 ~ updateAnalysis ~ init:', init)

  const res = await fetch(
    new Request(createURL(`/api/analysis/${id}`), init)
  );

  if (res.ok) {
    return (await res.json()) as Analysis;
  }
};
