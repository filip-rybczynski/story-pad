import { Story } from "@prisma/client";
import { createURL } from ".";

export const deleteStory = async (id: string) => {
  const res = await fetch(
    new Request(createURL(`/api/stories/${id}`), {
      method: "DELETE",
    })
  );

  if (res.ok) {
    return (await res.json()) as Story;
  } else throw new Error("oops");
};
