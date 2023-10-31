import { AnswerDisplayProps } from "./AnswerDisplayProps";

export const AnswerDisplay = ({question, answer, isLoading}: AnswerDisplayProps) => {

    if (!answer && !isLoading) return null;

    return (
        <div className="bg-teal-100 w-[90%] px-4 py-3 ml-2 rounded-md">
          {isLoading ? (
            <span
              className={`inline-block w-10 h-10 border-t-4
          border-teal-600
         rounded-full animate-spin`}
            ></span>
          ) : (
            <article>
              <header className="font-bold">Q: {question}</header>
              <p>{answer}</p>
            </article>
          )}
        </div>
 );
}
 