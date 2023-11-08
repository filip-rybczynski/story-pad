import { createURL } from ".";

export const askQuestion = async (question: string) => {
  const res = await fetch(
    new Request(createURL("/api/question"), {
      method: "POST",
      body: JSON.stringify({
        question,
      }),
    })
  );

  if (res.ok) {
    return (await res.json()) as string;
  } else {
    console.log("🚀 ~ file: askQuestion.ts:12 ~ askQuestion ~ res:", res);
    throw new Error("Failed to ask the question");
  }
};
