"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { FancyButton } from "@/components";
import { EditorFormProps } from "./types/EditorFormProps";
import { createNewStory, performAnalysis, updateStory } from "@/utils/api";
import { useRouter } from "next/navigation";
import { StoryData } from "./types/StoryData.interface";
import { analyze } from "@/utils/ai";

export const EditorForm = ({ content, setContent, handleSave }: EditorFormProps) => {
  const [isSaving, setIsSaving] = useState(false);

  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;

    setContent({
      ...content,
      [e.target.name]: newValue,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { storyTitle, storyContent } = e.target as typeof e.target &
      Record<"storyTitle" | "storyContent", { value: string }>;

    setIsSaving(true);
    await handleSave({
      storyTitle: storyTitle.value,
      storyContent: storyContent.value,
    });
    router.refresh();

    setIsSaving(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 flex flex-col justify-start items-start"
    >
      <label htmlFor="titleInput" className="text-lg mb-2">
        Story Title
      </label>
      <input
        id="titleInput"
        name="storyTitle"
        type="text"
        value={content.storyTitle}
        onChange={handleChange}
        className="w-[20rem] border-2 border-black/70 rounded-md"
      />
      <label htmlFor="storyInput" className="text-lg my-2">
        Story
      </label>
      <textarea
        id="storyInput"
        name="storyContent"
        className="w-full h-[50vh] border-2 border-black/70 rounded-md resize-none"
        placeholder="Write your story here!"
        value={content.storyContent}
        onChange={handleChange}
      ></textarea>
      <div className="self-end my-3">
        {/* <FancyButton
          type="button"
          name="analyze"
          onClick={() => {
            console.log("click");
            handleAnalyze(storyData);
          }}
        >
          Analyze
        </FancyButton> */}
        <FancyButton type="submit" name="save" disabled={isSaving}>
          Save
        </FancyButton>
        {/* <FancyButton type="submit" name="save_and_close">
          Save and Close
        </FancyButton> */}
      </div>
    </form>
  );
};

