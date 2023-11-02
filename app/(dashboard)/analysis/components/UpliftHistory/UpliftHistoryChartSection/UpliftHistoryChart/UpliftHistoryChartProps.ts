import { StoryWithAnalysis } from "../../types/StoryWithAnalysis.interface";

export interface UpliftHistoryChartProps {
  data: StoryWithAnalysis[];
  xAxisKey: "createdAt" | "updatedAt";
}
