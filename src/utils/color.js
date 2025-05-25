export const getColorByNumber = (num) => {
  if (num < 0) return "red";
  if (num === 0) return "gray";
  return "green";
};