import { CreateNewStoryCell, PageHeader } from "@/components";
import StoryCell from "@/components/StoryCell/StoryCell";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getStories = async () => {
  const { id } = await getUserByClerkID();

  return await prisma.story.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const StoriesPage = async () => {
  const stories = await getStories();
  return (
    <div className="px-6">
      <PageHeader>Your Stories</PageHeader>
      <section className="grid grid-cols-3 gap-6">
        <CreateNewStoryCell />
        <ul className="contents">
          {stories.map((story) => (
            <li key={story.id}>
              <StoryCell story={story} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StoriesPage;
