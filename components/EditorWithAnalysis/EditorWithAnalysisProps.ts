import { EditableStoryData } from "@/app/(dashboard)/editor/[[...id]]/EditableStory.type";
import { User } from "@prisma/client";

export interface EditorWithAnalysisProps {
  initialStoryData: EditableStoryData
}
