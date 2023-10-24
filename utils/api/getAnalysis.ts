import { createURL } from ".";
import { Analysis } from "../ai/promptSchema";

export const getAnalysis = async (title: string, content: string) => {
  console.log("test");
  const res = await fetch(
    new Request(createURL("/api/analysis"), {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
    })
  );

  if (res.ok) {
    return (await res.json()) as Analysis;
  } else throw new Error("oops");
};
