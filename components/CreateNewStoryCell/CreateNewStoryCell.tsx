"use client";

import { createNewStory } from "@/utils/api";
import { useRouter } from "next/navigation";

export const CreateNewStoryCell = () => {
  const router = useRouter();

  const handleClick = async () => {
    const { id: newID } = await createNewStory();

    router.push(`/editor/${newID}`);
  };

  return (
    <button
      className="h-[200px] border-teal-600/50 hover:border-teal-600 border-4 rounded-2xl px-6 py-4 relative"
      onClick={handleClick}
    >
      <h2 className="text-3xl text-teal-600 absolute top-12 left-6 text-left">
        Write a new story
      </h2>
    </button>
  );
};
