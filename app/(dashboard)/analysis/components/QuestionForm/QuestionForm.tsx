"use client";

import { FancyButton } from "@/components";
import { askQuestion } from "@/utils/api/askQuestion";
import React, { useState } from "react";
import { AnswerDisplay } from "../AnswerDisplay";

export const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [displayQuestion, setDisplayQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("");
    setIsLoading(true);
    const newAnswer = await askQuestion(question);

    setAnswer(newAnswer);
    setDisplayQuestion(question);
    setQuestion("");
    setIsLoading(false);
  };
  return (
    <div className="w-5/6 m-auto">
      <form className="pt-2 pb-6" onSubmit={handleSubmit}>
        <label htmlFor="question">
          What would you like to know about your stories?
        </label>
        <textarea
          value={question}
          onChange={handleChange}
          id="question"
          className="block h-24 ml-2 my-3 p-1 w-[90%] border-black/50 border-2 rounded-md resize-none"
          placeholder="e.g. What themes do I write about in my stories?"
        />
        <FancyButton type="submit" disabled={isLoading}>
          Ask
        </FancyButton>
      </form>
      <AnswerDisplay
        question={displayQuestion}
        answer={answer}
        isLoading={isLoading}
      />
    </div>
  );
};
