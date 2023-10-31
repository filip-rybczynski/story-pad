import { StoryWithAnalysis } from "../types/StoryWithAnalysis.interface";

export interface StoryScoreChartProps {
  data: StoryWithAnalysis[];
  xAxisKey?: Exclude<keyof StoryWithAnalysis, "analysis" | "id" | "storyTitle">;
}
