import { getUsersStoryByID } from "@/utils/getStoryByID";
import { Story, User } from "@prisma/client";
import { useEffect, useState } from "react";

export const useStory = (user: User, storyID?: string) => {
  const [story, setStory] = useState<Story>();

  useEffect(() => {
    if (storyID) {
      (async () => {
        const existingStory = (await getUsersStoryByID(
          user.id,
          storyID
        )) as Story;
        setStory(existingStory);
      })();
    }
  }, [user, storyID]);

  return [story, setStory] as const;
};
