module.exports = function check(str, bracketsConfig) {
  // your solution
var parentheses = "[]{}()|",
    bracketsConfig = [],
    i, //Index in the string
    character,//Character in the string 
    bracePosition;

  for(i = 0; character = str[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      bracketsConfig.push(bracePosition + 1); // push next expected brace position
    } else {
      if(bracketsConfig.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return bracketsConfig.length === 0;
}
