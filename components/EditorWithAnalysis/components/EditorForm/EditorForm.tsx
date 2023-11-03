"use client";
import { FormEvent, useState } from "react";
import { FancyButton } from "@/components";
import { EditorFormProps } from "./types/EditorFormProps";
import { useRouter } from "next/navigation";

export const EditorForm = ({
  content,
  handleSave,
  handleChange,
}: EditorFormProps) => {
  const [isSaving, setIsSaving] = useState(false);

  const router = useRouter();

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
        <FancyButton type="submit" name="save" disabled={isSaving}>
          Save
        </FancyButton>
      </div>
    </form>
  );
};
