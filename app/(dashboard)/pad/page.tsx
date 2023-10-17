import { PageHeader } from "@/components";
import StoryCell from "@/components/StoryCell/StoryCell";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";

const getStories = async () => {
  const { id } = await getUserByClerkID();

  return await prisma.story.findMany({
    where: {
      userId: id,
    },
  });
};

const PadPage = async () => {
  const stories = await getStories();
  return (
    <div className="px-6">
      <PageHeader>Story Pad</PageHeader>
      <ul className="grid grid-cols-3 gap-6">
        <li>
          <Link href="/editor">
            <div className="h-[200px] border-black/70 border-2 rounded-2xl px-6 py-4">
              <h2 className="text-3xl pt-4 text-teal-600">Create new story</h2>
            </div>
          </Link>
        </li>
        {stories.map((story) => (
          <li key={story.id}>
            <StoryCell story={story} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PadPage;
