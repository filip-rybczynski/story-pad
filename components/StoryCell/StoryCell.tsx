import { truncate } from "@/utils";
import { Story } from "@prisma/client";
import Link from "next/link";

const StoryCell = ({ story }: { story: Story }) => {
  return (
    <Link href="/editor">
      <article className="h-[200px] border-black/70 border-2 rounded-2xl px-6 py-4">
        <h2 className="text-2xl pb-4">{story.storyTitle}</h2>
        <p className='overflow-hidden'>{truncate(story.storyContent)}</p>
      </article>
    </Link>
  );
};

export default StoryCell;
