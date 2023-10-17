export const truncate = (text: string, cutoff = 100) =>
  text.length > cutoff ? text.slice(0, cutoff - 1) + "..." : text;
