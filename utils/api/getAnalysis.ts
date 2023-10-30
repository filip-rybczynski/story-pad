import { createURL } from ".";
import { Analysis } from "@prisma/client";

export const getAnalysis = async (storyID: string) => {
  console.log(storyID)
  const res = await fetch(
    new Request(createURL(`/api/analysis/${storyID}`), {
      method: "GET",
    })
  );

  if (res.ok) {
    const body = (await res.json()) as Analysis | null;

    return body;
  } else throw new Error("oops");
};
