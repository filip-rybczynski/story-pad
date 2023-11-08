"use client";

import { createNewStory } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreateNewStoryCell = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const { id: newID } = await createNewStory();

    try {
      router.push(`/editor/${newID}`);
      router.refresh();
    } catch {
      setIsLoading(false); // If the router push doesn't work for some reason we should un-disable the button. On the other hand, it flickers, so if not needed best to avoid it
    }
  };

  return (
    <button
      className="h-[200px] border-teal-600/50 hover:border-teal-600 border-4 rounded-2xl px-6 py-4 relative"
      disabled={isLoading}
      style={isLoading ? { opacity: "0.5" } : {}}
      onClick={handleClick}
    >
      <h2 className="text-3xl text-teal-600 absolute top-12 left-6 text-left">
        Write a new story
      </h2>
    </button>
  );
};
