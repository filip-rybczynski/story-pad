import { Story } from "@prisma/client";
import { createURL } from ".";

export const createNewStory = async (title?: string, content?: string) => {
  const res = await fetch(
    new Request(createURL("/api/stories"), {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    })
  );

  if (res.ok) {
    return (await res.json()) as Story;
  } else throw new Error("oops");
};
