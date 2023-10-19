import { Story } from "@prisma/client";
import { createURL } from ".";

export const updateStory = async (
  id: string,
  title: string,
  content: string
) => {
  const res = await fetch(
    new Request(createURL(`/api/stories/${id}`), {
      method: "PATCH",
      body: JSON.stringify({
        title,
        content,
      }),
    })
  );

  if (res.ok) {
    return (await res.json()) as Story;
  }
};
