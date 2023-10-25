import { EditableStory } from "@/app/(dashboard)/editor/[[...id]]/EditableStory.type";
import { Story } from "@prisma/client";

export interface AnalysisSidebarProps {
  storyID?: string;
  story: EditableStory;
}
