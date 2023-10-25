import { Story } from "@prisma/client";

export type EditableStory = Pick<Story, "storyTitle" | "storyContent">

export type EditableStoryData = EditableStory & {id?: string};