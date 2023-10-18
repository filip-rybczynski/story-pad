"use client";

import { createNewStory } from "@/utils/api";
// import { useRouter } from "next/navigation";

export const CreateNewStoryCell = () => {
  //   const router = useRouter();

  const handleClick = async () => {
    const { id: newID } = await createNewStory();

    // router.push(`/editor/${newID}`);
  };

  return (
    <button
      className="h-[200px] border-black/70 border-2 rounded-2xl px-6 py-4 relative"
      onClick={handleClick}
    >
      <h2 className="text-3xl text-teal-600 absolute top-12 left-6">
        Write a new story
      </h2>
    </button>
  );
};
