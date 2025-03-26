export const TYPE_COLORS = {
  learning: "blue",
  problem: "red",
  reference: "green",
  explanation: "purple",
  default: "gray",
} as const;

export type DocType = keyof typeof TYPE_COLORS;

export default true;
