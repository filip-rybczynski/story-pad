import { PromptTemplate } from "langchain/prompts";

const questionPromptTemplateString = `Context information is below.
---------------------
{context}
---------------------
The context just given was a story written by me, the author, along with a summary of the analysis done on the story, if available. Given the context information and no prior knowledge, answer my question: {question}

Don't add unnecessary details, keep it simple. Don't make stuff up. If you don't know, just say so`;

export const storyPadQuestionPrompt = new PromptTemplate({
  inputVariables: ["context", "question"],
  template: questionPromptTemplateString,
});

const refinePromptTemplateString = `My original question is as follows: {question}
You have provided an existing answer: {existing_answer}
You have the opportunity to refine the existing answer with some more context below.
------------
{context}
------------
If the new context isn't useful or relevant, simply print the existing answer with no additions.
If the new context is relevant, use it to refine the existing answer to better answer the question. If the original answer couldn't answer the question at all, replace it with this new answer. Otherwise, make sure to preserve the sense of the original answer in the refined answer.
You must provide a response, either the existing answer or a new, refined answer. Don't add unnecessary details, keep it simple.
The final answer shouldn't make use of phrases like 'additional context', 'given context', 'existing answer', 'new context', 'old answer', no matter what! Also, don't mention you're refining or updating the answer. This is because you must hide this answer updation process from the end user.`;

export const storyPadRefinePrompt = new PromptTemplate({
  inputVariables: ["question", "existing_answer", "context"],
  template: refinePromptTemplateString,
});
