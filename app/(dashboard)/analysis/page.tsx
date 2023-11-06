import { getUserByClerkID } from "@/utils/auth";
import { QuestionForm } from "./components";
import { UpliftHistory } from "./components/UpliftHistory";
import { prisma } from "@/utils/db";

const getStories = async () => {
  const { id } = await getUserByClerkID();

  return await prisma.story.findMany({
    where: {
      userId: id,
      analysis: {
        isNot: null,
      },
    },
  });
};

async function AnalysisPage() {
  const data = await getStories();

  if (!data || data.length === 0)
    return (
      <p className="mt-2 text-gray-600">
        Please add stories with analyses to access tools available on this page
      </p>
    );
  else
    return (
      <>
        <QuestionForm />
        <UpliftHistory />
      </>
    );
}

export default AnalysisPage;
