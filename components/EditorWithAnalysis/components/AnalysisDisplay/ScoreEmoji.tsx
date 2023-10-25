interface ScoreEmojiProps {
  symbol: string;
  label: string;
  active?: boolean;
}

export const ScoreEmoji = ({
  symbol = "😅",
  label,
  active = true,
}: ScoreEmojiProps) => {
  return (
    <span
      role="img"
      aria-label={label}
      className={`text-3xl ${active ? "opacity-100" : "opacity-30"}`}
    >
      {symbol}
    </span>
  );
};
