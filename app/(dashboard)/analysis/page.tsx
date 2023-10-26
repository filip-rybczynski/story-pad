"use client";

import { FancyButton, PageHeader } from "@/components";
import React, { useState } from "react";

function AnalysisPage() {

  const [question, setQuestion] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('asked!')
  };

  return (
    <div>
      <PageHeader>Analysis page</PageHeader>
      <form className="pt-2 pb-6" onSubmit={handleSubmit}>
        <label htmlFor="question">
          What would you like to know about your stories?
        </label>
        <textarea
          value={question}
          onChange={handleChange}
          id="question"
          className="block h-24 ml-2 my-3 p-1 w-[50%] border-black/50 border-2 rounded-md resize-none"
        />
        <FancyButton type="submit">Ask</FancyButton>
      </form>
      <div>Placeholder for chart</div>
    </div>
  );
}

export default AnalysisPage;
