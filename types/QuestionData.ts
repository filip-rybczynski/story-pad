import { Analysis, Story } from "@prisma/client";

export type AnalysisQuestionData = Pick<
  Analysis,
  "atmosphere" | "moral" | "genreTags" | "keyThemes"
>;

export interface StoryQuestionData {
  id: string;
  storyTitle: string;
  storyContent: string;
  createdAt: Date;
  analysis: AnalysisQuestionData | null;
}

export type AnalysisMetadata = Pick<Analysis, 'atmosphere'| 'moral'> & {
  genreString: string,
  themeString: string,
}