"use client";

import { FormEvent } from "react";
import { PageHeader, FancyButton } from "@/components";
import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";
import { User } from "@prisma/client";

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const user = (await getUserByClerkID()) as User; // will never be null here

  const { title, story } = e.target as typeof e.target &
    Record<"title" | "story", { value: string }>;

  console.log(
    `The title of the story is ${title.value}, and it goes like this: ${story.value}`
  );

  await prisma.story.create({
    data: {
      userId: user.clerkId,
      storyTitle: title.value,
      storyContent: story.value,
    },
  });
};

const EditorPage = () => {
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
        className="w-[20rem] border-2 border-black/70 rounded-md"
      />
      <label htmlFor="storyInput" className="text-lg my-2">
        Story
      </label>
      <textarea
        id="storyInput"
        name="story"
        className="w-full h-[50vh] border-2 border-black/70 rounded-md resize-none"
        placeholder="Write your story here!"
      ></textarea>
      <div className="self-end my-3">
        <FancyButton type="submit">Save</FancyButton>
      </div>
    </form>
  );
};

export default EditorPage;
