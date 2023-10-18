import { Story } from "@prisma/client";
import { createURL } from ".";

export const createNewStory = async () => {
  const res = await fetch(
    new Request(createURL("/api/stories"), {
      method: "POST",
    })
  );

  if (res.ok) {
    return await res.json() as Story;
  } else throw new Error("oops");
};
