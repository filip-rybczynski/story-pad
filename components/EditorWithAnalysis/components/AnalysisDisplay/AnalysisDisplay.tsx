import { AnalysisContent } from "@/types/AnalysisContent";
import { ScoreEmoji } from "./ScoreEmoji";

export const AnalysisDisplay = ({
  analysis,
}: {
  analysis?: AnalysisContent;
}) => {
  const showMoodScore = (score: number) => {
    let emoji = "😐";

    if (score > 1) emoji = "😀";
    if (score < 1) emoji = "😩";

    return (
      <div aria-label={score.toString()}>
        {score === 0 ? (
          <ScoreEmoji symbol={emoji} label="meh icon" />
        ) : (
          Array(5)
            .fill("")
            .map((_, i) => {
              return (
                <ScoreEmoji
                  key={i}
                  symbol={emoji}
                  label="score icon"
                  active={i < Math.abs(score)}
                />
              );
            })
        )}
      </div>
    );
  };

  if (!analysis) return null;

  return (
    <ul className="divide-y-2 mt-3 mb-5">
      <li>
        <span className="font-bold">Synopsis: </span> {analysis.synopsis}
      </li>
      <li className="flex items-center gap-1">
        <span className="font-bold">Atmosphere: </span> {analysis.atmosphere}{" "}
        <span
          className="content-[''] inline-block h-6 w-6 rounded-lg ml-2 my-2"
          style={{ backgroundColor: analysis.atmosphereColor }}
        />
      </li>
      <li>
        <span className="font-bold">Moral: </span>{" "}
        {analysis.moral === "NULL" ? "None" : analysis.moral}
      </li>
      <li>
        <span className="font-bold">Genre: </span>{" "}
        {analysis.genreTags.join(", ")}
      </li>
      <li>
        <span className="font-bold">Main themes: </span>{" "}
        {analysis.keyThemes.join(", ")}
      </li>
      <li>
        <span className="font-bold">Uplifting score: </span>
        {analysis.upliftingScore}
        {showMoodScore(analysis.upliftingScore)}
      </li>
    </ul>
  );
};
