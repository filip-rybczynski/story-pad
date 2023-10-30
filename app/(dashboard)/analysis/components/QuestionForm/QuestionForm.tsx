"use client";

import { FancyButton } from "@/components";
import { askQuestion } from "@/utils/api/askQuestion";
import React, { useState } from "react";

export const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newAnswer = await askQuestion(question);

    setAnswer(newAnswer);
    setQuestion("");
    setIsLoading(false);
  };
  return (
    <div>
      <form className="pt-2 pb-6" onSubmit={handleSubmit}>
        <label htmlFor="question">
          What would you like to know about your stories?
        </label>
        <textarea
          value={question}
          onChange={handleChange}
          id="question"
          className="block h-24 ml-2 my-3 p-1 w-[50%] border-black/50 border-2 rounded-md resize-none"
          placeholder="e.g. What themes do I write about in my stories?"
        />
        <FancyButton type="submit" disabled={isLoading}>
          Ask
        </FancyButton>
        {isLoading && (
          <span
            className={`inline-block w-10 h-10 border-t-4
          border-teal-600
         rounded-full animate-spin`}
          ></span>
        )}
      </form>
      {answer && <p>{answer}</p>}
    </div>
  );
};
