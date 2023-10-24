import { z } from "zod";

export const zodPrompt = z.object({
  synopsis: z.string().describe("one sentence synopsis of the plot"),
  atmosphere: z
    .string()
    .describe(
      "the general emotional atmosphere of the story (whether it's joyful, scary, nihilistic, disgusting etc.)"
    ),
  atmosphereColor: z
    .string()
    .describe("a hexadecimal color code to represent the story's emotion."),
  moral: z
    .nullable(z.string())
    .describe(
      "the moral of the story in one sentence. If the story has no moral, leave NULL."
    ),
  genreTags: z
    .array(z.string())
    .describe(
      "genre description that I can use as tags (e.g. comedy, adventure, drama, sci-fi) - any number you see fit."
    ),
  keyThemes: z
    .array(z.string())
    .describe("a list of three plain nouns which best reflect the story's themes."),
  upliftingScore: z
    .number()
    .describe(
      "a number representation of how uplifting the story is, between -5 and 5 inclusive, where -5 is extremely depressing, 0 is completely neutral and 5 is extremely uplifting."
    ),
});

export type Analysis = z.infer<typeof zodPrompt>;
