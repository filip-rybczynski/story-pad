import { Document } from "langchain/document";
import { OpenAI } from "langchain/llms/openai";
import { loadQARefineChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { AnalysisQuestionData, StoryQuestionData } from "@/types/QuestionData";
import {
  getContentFromStoryData,
  summarizeAnalysis,
} from "./getContentFromStoryData";
import {
  storyPadQuestionPrompt,
  storyPadRefinePrompt,
} from "./const/storyPrompts";

export const qa = async (
  question: string,
  stories: StoryQuestionData[]
): Promise<string> => {
  const docs = stories.map(
    (story) =>
      new Document({
        pageContent: getContentFromStoryData(story),
        metadata: {
          id: story.id,
          createdAt: story.createdAt,
        },
      })
  );

  const analysisSummary =
    "Here is a summary of all analyses performed on my stories, describing their genres, key themes, morals and atmosphere:\n\n" +
    stories
      .filter((story) => story.analysis !== null)
      .map(({ analysis, storyTitle }) =>
        summarizeAnalysis(analysis as AnalysisQuestionData, storyTitle)
      );

  const analysisDoc = new Document({
    pageContent: analysisSummary,
  });

  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });

  const chain = loadQARefineChain(model, {
    questionPrompt: storyPadQuestionPrompt,
    refinePrompt: storyPadRefinePrompt,
  });

  const embeddings = new OpenAIEmbeddings(); // returns a function that allows a chain to create embeddings

  const store = await MemoryVectorStore.fromDocuments(
    [...docs, analysisDoc],
    embeddings
  );

  const relevantDocsWithScores = await store.similaritySearchWithScore(
    question
  );

  const relevantDocs = relevantDocsWithScores
    .sort((docA, docB) => docA[1] - docB[1])
    .map((docWithScore) => docWithScore[0]);

  try {
    const res = await chain.call({
      input_documents: relevantDocs,
      question,
      timeout: 60_000,
    });
    console.log("🚀 ~ file: qa.ts:75 ~ res:", res);

    return res.output_text;
  } catch (e) {
    console.log("🚀 ~ file: qa.ts:79 ~ e:", e);

    return "Apologies, I seem to have encountered an error! Please try again later!";
  }
};
