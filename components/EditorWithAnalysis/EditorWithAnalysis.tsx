"use client";

import { ChangeEvent, useState } from "react";
import { EditorForm, AnalysisSidebar } from "./components/";
import { EditorWithAnalysisProps } from "./EditorWithAnalysisProps";
import { EditableStory } from "@/app/(dashboard)/editor/[[...id]]/EditableStory.type";
import { createNewStory, updateStory } from "@/utils/api";
import { useRouter } from "next/navigation";

const EditorWithAnalysis = ({
  initialStoryData: { id, storyTitle, storyContent },
}: EditorWithAnalysisProps) => {
  const [editorContent, setEditorContent] = useState<EditableStory>({
    storyTitle,
    storyContent,
  });
  const [isStorySaved, setIsStorySaved] = useState(false);

  const router = useRouter();

  const handleSave = async ({
    storyTitle: title,
    storyContent: content,
  }: EditableStory) => {
    if (id) await updateStory(id, title, content);
    else {
      const { id } = await createNewStory(title, content);

      router.push(`/editor/${id}`);
    }
    setIsStorySaved(true);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;

    setEditorContent({
      ...editorContent,
      [e.target.name]: newValue,
    });

    setIsStorySaved(false);
  };

  return (
    <div className="grid grid-cols-[3fr_1fr] divide-x-2">
      <EditorForm
        content={editorContent}
        handleSave={handleSave}
        handleChange={handleChange}
      />
      <AnalysisSidebar
        story={editorContent}
        storyID={id}
        isStorySaved={isStorySaved}
      />
    </div>
  );
};

export default EditorWithAnalysis;
