export interface StoryWithAnalysis {
  analysis: {
    atmosphereColor: string;
    upliftingScore: number;
  };
  createdAt: Date;
  updatedAt: Date;
  storyTitle: string;
}
