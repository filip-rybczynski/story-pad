import { truncate } from "@/utils";
import Link from "next/link";
import { StoryCellProps } from "./StoryCellProps";

const StoryCell = ({ story }: StoryCellProps) => {
  return (
    <Link href="/editor">
      <article className="min-h-[200px] border-black/70 border-2 rounded-2xl px-6 py-4">
        <h2 className="text-2xl pb-4">{story.storyTitle}</h2>
        <p className="min-h-[100px] overflow-hidden">{truncate(story.storyContent, 150)}</p>
        <footer className="align-bottom bottom-0 text-xs text-right">
          Created: {new Date(story.createdAt).toDateString()}
        </footer>
      </article>
    </Link>
  );
};

export default StoryCell;
