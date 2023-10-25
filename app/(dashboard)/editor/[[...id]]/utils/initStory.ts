import { Story } from "@prisma/client";
import { EditableStoryData } from "../EditableStory.type";
import { getUsersStoryByID } from "@/utils/getStoryByID";

export const initStory = async (userID: string, storyID?: string) => {
  let initialStoryData: EditableStoryData;

  if (storyID) {
    // If we have an ID in params, that means were opening an existing story, and so we want to see it in the editor
    const { storyTitle, storyContent } = (await getUsersStoryByID(
      userID,
      storyID
    )) as Story;
    initialStoryData = {
      id: storyID,
      storyTitle,
      storyContent,
    };
  } else {
    // if there's no ID in params, this is a new story
    initialStoryData = {
      storyTitle: "Your New Story",
      storyContent: "",
    };
  }

  return initialStoryData;
};
