import { EditableStory } from "@/app/(dashboard)/editor/[[...id]]/EditableStory.type";
import { ChangeEvent } from "react";

export interface EditorFormProps {
  content: EditableStory;
  handleSave: (content: EditableStory) => Promise<void>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
