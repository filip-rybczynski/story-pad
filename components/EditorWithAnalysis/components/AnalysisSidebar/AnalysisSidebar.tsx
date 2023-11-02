"use client";

import { FancyButton, Loader } from "@/components";
import { AnalysisSidebarProps } from "./AnalysisSidebarProps";
import { useEffect, useState } from "react";
import { performAnalysis } from "@/utils/api";
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

  const handleAnalyze = async () => {
    setIsLoading(true);
    const newAnalysis = await performAnalysis(
      story.storyTitle,
      story.storyContent
    );
    console.log(
      "🚀 ~ file: AnalysisSidebar.tsx:47 ~ handleAnalyze ~ newAnalysis:",
      newAnalysis
    );

    setAnalysis(newAnalysis);

    const test = await updateAnalysis(
      newAnalysis as MyAnalysis,
      storyID as string
    );
    console.log(
      "🚀 ~ file: AnalysisSidebar.tsx:52 ~ handleAnalyze ~ test:",
      test
    );

    setIsLoading(false);
  };

  return (
    <section className="p-4">
      <h2 className="text-xl">Analysis</h2>
      <AnalysisDisplay analysis={analysis} />
      <div className="flex items-center mt-3">
        <FancyButton
          disabled={isLoading || !storyID || !story.storyContent}
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
      {!storyID ? (
        <span className="inline-block text-red-500 ml-2 mt-2">
          Save your story first!
        </span>
      ) : null}
    </section>
  );
};
