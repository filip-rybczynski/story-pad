import { EditableStory } from "@/app/(dashboard)/editor/[[...id]]/EditableStory.type";

export interface AnalysisSidebarProps {
  story: EditableStory;
  isStorySaved: boolean;
  storyID?: string;
}
