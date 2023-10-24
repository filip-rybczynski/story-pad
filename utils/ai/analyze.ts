import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import z from "zod";
import { zodPrompt } from "./promptSchema";

const parser = StructuredOutputParser.fromZodSchema(zodPrompt);

const getPrompt = async (title: string, story: string) => {
  const format_instructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template:
      "Analyze the following story. Follow the instructions and format your response to match the format instructions, no matter what!\n{format_instructions}\nTitle: {title}\n{story}",
    inputVariables: ["title", "story"],
    partialVariables: { format_instructions },
  });

  const input = await prompt.format({
    title,
    story,
  });

  return input;
};

export const analyze = async (title: string, story: string) => {
  const prompt = await getPrompt(title, story);
  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const response = await model.call(prompt);

  try {
    return parser.parse(response);
  } catch (e) {
    let message = "Unknown Error";
    if (e instanceof Error) message = e.message;
    throw new Error(message);
  }
};
