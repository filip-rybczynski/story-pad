"use client";

import { FancyButton, Loader } from "@/components";
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
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    (async () => {
      console.log("Saving analysis...");
      const saved = await updateAnalysis(
        analysis as MyAnalysis,
        storyID as string
      );
      console.log(
        "🚀 ~ file: AnalysisSidebar.tsx:56 ~ handleAnalyze ~ saved:",
        saved
      );
    })();
  }, [analysis, storyID]);

  const handleAnalyze = async () => {
    setIsLoading(true);
    console.log("sending API request!");
    const newAnalysis = await performAnalysis(
      story.storyTitle,
      story.storyContent
    );
    console.log(
      "🚀 ~ file: AnalysisSidebar.tsx:47 ~ handleAnalyze ~ newAnalysis:",
      newAnalysis
    );

    setAnalysis(newAnalysis);
    setIsLoading(false);
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
      <div className="flex items-center">
        <FancyButton
          disabled={isLoading || !story.storyContent}
          type="button"
          onClick={handleAnalyze}
        >
          Analyze Story
        </FancyButton>{" "}
        {isLoading && (
          <span
            className={`inline-block w-10 h-10 border-t-4
          border-teal-600
         rounded-full animate-spin`}
          ></span>
        )}
      </div>
    </section>
  );
};
