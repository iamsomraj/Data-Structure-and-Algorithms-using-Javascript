const stringReverse = (string) => string.split("").reverse().join("");
function stringRev(string) {
  if (string.length <= 2) {
    return string;
  }
  const reverse = [];
  for (let i = string.length; i >= 0; i--) {
    reverse.push(string[i]);
  }
  return reverse.join("");
}
const input = "My name is Somraj Mukherjee!";
console.log(stringReverse(input));
console.log(stringRev(input));
