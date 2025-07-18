export const capitalizeFirstLetter = (str: string) => {
  if (!str) return "";
  const [firstLetter, ...rest] = str;
  return firstLetter.toUpperCase() + rest.join("");
};
