"use client";

import { FancyButton } from "@/components";
import { AnalysisSidebarProps } from "./AnalysisSidebarProps";
import { useEffect, useState } from "react";
import { Analysis } from "@prisma/client";
import { performAnalysis } from "@/utils/api";
import { analyze } from "@/utils/ai";
import { updateAnalysis } from "@/utils/api/updateAnalysis";
import { getAnalysis } from "@/utils/api/getAnalysis";
import { AnalysisDisplay } from "../AnalysisDisplay/AnalysisDisplay";

type MyAnalysis = {
  synopsis: string;
  atmosphere: string;
  atmosphereColor: string;
  moral: string | null;
  genreTags: string[];
  keyThemes: string[];
  upliftingScore: number;
};

export const AnalysisSidebar = ({ story, storyID }: AnalysisSidebarProps) => {
  const [analysis, setAnalysis] = useState<MyAnalysis>();

  useEffect(() => {
    (async () => {
      if (!storyID) return;

      const fetchedAnalysis = await getAnalysis(storyID);

      if (fetchedAnalysis) {
        const { id, createdAt, updatedAt, storyId, ...newAnalysis } =
          fetchedAnalysis;

        setAnalysis(newAnalysis as MyAnalysis);
      }
    })();
  }, [storyID]);

  const handleAnalyze = async () => {
    console.log("sending API request!");
    const newAnalysis = await performAnalysis(
      story.storyTitle,
      story.storyContent
    );

    setAnalysis(newAnalysis);

    console.log(newAnalysis);
  };

  const handleSave = async () => {
    console.log("attempting to save analysis...");
    const saved = await updateAnalysis(
      analysis as MyAnalysis,
      storyID as string
    );

    console.log(saved);
  };

  return (
    <section className="p-4">
      <h2 className="text-xl">Analysis</h2>
      {/* <ul>
        {analysis &&
          (Object.keys(analysis) as Array<keyof MyAnalysis>).map((key) => {
            if (analysis[key] === null) return;
            else if (Array.isArray(analysis[key])) {
              const array = analysis[key] as string[];
              return <li key={key}>{key + ": " + array.join(", ")}</li>;
            } else return <li key={key}>{key + ": " + analysis[key]}</li>;
          })}
      </ul> */}
      <AnalysisDisplay analysis={analysis} />

      <FancyButton
        disabled={!story.storyContent}
        type="button"
        onClick={handleAnalyze}
      >
        Analyze Story
      </FancyButton>
      <FancyButton
        // disabled={!storyID || !analysis}
        type="button"
        onClick={handleSave}
      >
        Send to Prisma
      </FancyButton>
    </section>
  );
};
