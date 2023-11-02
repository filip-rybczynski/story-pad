import { getUserByClerkID } from "@/utils/auth";
import { StoryScoreChart } from "./StoryScoreChart/StoryScoreChart";
import { prisma } from "@/utils/db";
import { StoryWithAnalysis } from "./types/StoryWithAnalysis.interface";

const getStoriesWithAnalyses = async () => {
  const { id } = await getUserByClerkID();

  return await prisma.story.findMany({
    where: {
      userId: id,
      analysis: {
        isNot: null,
      },
    },
    select: {
      updatedAt: true,
      createdAt: true,
      storyTitle: true,
      analysis: {
        select: {
          upliftingScore: true,
          atmosphereColor: true,
          atmosphere: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

export const StoryScoreChartDisplay = async () => {
  const storiesWithAnalyses =
    (await getStoriesWithAnalyses()) as StoryWithAnalysis[]; // Based on the Prisma query, we can be sure that there won't be a story with a NULL analysis, contrary to Typescript's inference

  return (
    <section className="h-[600px]">
      <h3 className="text-xl">How uplifting have my stories been?</h3>
      <StoryScoreChart data={storiesWithAnalyses} />
    </section>
  );
};
