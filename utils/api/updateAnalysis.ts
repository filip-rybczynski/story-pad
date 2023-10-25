import {
  AnalysisContent,
  FormattedAnalysisContent,
} from "@/types/AnalysisContent";
import { createURL } from ".";
import { Analysis } from "@prisma/client";

export const updateAnalysis = async (analysis: AnalysisContent, id: string) => {

  console.log('inside the util function...')

  const res = await fetch(
    new Request(createURL(`/api/analysis/${id}`), {
      method: "PATCH",
      body: JSON.stringify(analysis),
    })
  );

  console.log(res);

  if (res.ok) {
    return (await res.json()) as Analysis;
  }
};
