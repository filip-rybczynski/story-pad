import { EditableStory } from "@/app/(dashboard)/editor/[[...id]]/EditableStory.type";
import { Story, User } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export interface EditorFormProps {
  content: EditableStory;
  setContent: Dispatch<SetStateAction<EditableStory>>;
  handleSave: (content: EditableStory) => Promise<void>
}
