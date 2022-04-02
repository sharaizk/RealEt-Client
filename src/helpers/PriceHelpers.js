export const PriceConvertor = (number, decimals, recursiveCall) => {
  const noOfLakhs = number / 100000;
  let displayStr;
  let isPlural;
  // Rounds off digits to decimalPoints decimal places
  function roundOf(integer) {
    return integer.toLocaleString("en-IN");
  }

  if (noOfLakhs >= 1 && noOfLakhs <= 99) {
    const lakhs = roundOf(noOfLakhs);
    isPlural = lakhs > 1 && !recursiveCall;
    displayStr = `${lakhs} Lakh${isPlural ? "s" : ""}`;
  } else if (noOfLakhs >= 100) {
    const crores = roundOf(noOfLakhs / 100);
    const crorePrefix =
      crores >= 100000 ? PriceConvertor(crores, decimals, true) : crores;
    isPlural = crores > 1 && !recursiveCall;
    displayStr = `${crorePrefix} Crore${isPlural ? "s" : ""}`;
  } else {
    displayStr = number;
  }

  return displayStr;
};
