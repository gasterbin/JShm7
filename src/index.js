const isPalindrome = (str) => {
  const sep = "";
  const strWithoutGaps = str.toLowerCase().replaceAll(" ", sep);
  return strWithoutGaps === strWithoutGaps.split(sep).reverse().join(sep);
};

console.log(isPalindrome("Аргентина манит негра"));
