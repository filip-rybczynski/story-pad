"use client";

import { Story, User } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";
import { EditorForm, AnalysisSidebar } from "./components/";
import { EditorWithAnalysisProps } from "./EditorWithAnalysisProps";
import { useStory } from "./hooks/useExistingStory";
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
  // const [isStorySaved, setIsStorySaved] = useState(true);

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
  };

  return (
    <div className="grid grid-cols-[3fr_1fr] divide-x-2">
      <EditorForm
        content={editorContent}
        setContent={setEditorContent}
        handleSave={handleSave}
      />
      {/* <section> */}
      <AnalysisSidebar story={editorContent} storyID={id} />
      {/* <FancyButton>Analyze Story</FancyButton>
        <FancyButton>Save in Prisma</FancyButton>
      </section> */}
    </div>
  );
};

export default EditorWithAnalysis;
