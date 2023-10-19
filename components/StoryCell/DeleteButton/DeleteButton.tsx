"use client";

import { deleteStory } from "@/utils/api";
import { DeleteButtonProps } from "./DeleteButtonProps";
import { useRouter } from "next/navigation";

export const DeleteButton = ({ storyID }: DeleteButtonProps) => {
  const router = useRouter();

  const handleClick = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault(); // to stop the parent Link event from firing

    const shouldDelete = confirm("Are you sure you want to delete this story?");
    if (shouldDelete) {
      await deleteStory(storyID);

      router.refresh();
    } else return;
  };

  return (
    <button onClick={handleClick} className="absolute top-4 right-4">
      <span className="font-bold opacity-10 hover:opacity-100">❌</span>
    </button>
  );
};

export default DeleteButton;
