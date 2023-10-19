"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { FancyButton } from "@/components";
import { EditorFormProps } from "./EditorFormProps";
import { createNewStory, updateStory } from "@/utils/api";
import { useRouter } from "next/navigation";

const EditorForm = ({ user, story }: EditorFormProps) => {
  const [storyData, setStoryData] = useState({
    title: story?.storyTitle || "",
    content: story?.storyContent || "",
  });

  const [isSaving, setIsSaving] = useState(false);

  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;

    setStoryData({
      ...storyData,
      [e.target.name]: newValue,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content } = e.target as typeof e.target &
      Record<"title" | "content", { value: string }>;

    setIsSaving(true);
    if (story) await updateStory(story.id, title.value, content.value);
    else {
      const { id } = await createNewStory(title.value, content.value);
      router.push(`/editor/${id}`);
    }
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
        name="title"
        type="text"
        value={storyData.title}
        onChange={handleChange}
        className="w-[20rem] border-2 border-black/70 rounded-md"
      />
      <label htmlFor="storyInput" className="text-lg my-2">
        Story
      </label>
      <textarea
        id="storyInput"
        name="content"
        className="w-full h-[50vh] border-2 border-black/70 rounded-md resize-none"
        placeholder="Write your story here!"
        value={storyData.content}
        onChange={handleChange}
      ></textarea>
      <div className="self-end my-3">
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

export default EditorForm;
