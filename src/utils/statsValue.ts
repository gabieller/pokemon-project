export const statsValue = (value: number): string => {
  if (value <= 49) return "#ef476f";

  if (value <= 79) return "#ffd166";

  return "#06d6a0";
};
