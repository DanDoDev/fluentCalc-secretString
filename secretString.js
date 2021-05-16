// Test is pre written to output secret string from the triplets. Run "node secretString.js"

//    Example Letter Map    
// {    
//     t: {u,p,s,i}
//     s: {u}
//     u: {p}
//     p: {}
//     w: {h,i,s}
//     h: {i,a,p,s}
//     i: {s}
//     a:{t,s,p}
// }

let letterMap;

const findSecretString = (triplets) => {
  letterMap = initLetterMap(triplets);
  return recursiveBruteForce("", null, Object.keys(letterMap).length);
};

const initLetterMap = (triplets) => {
  const letterMap = {};
  for (let i = 0; i < triplets.length; i++) {
    const triplet = triplets[i];
    for (let j = 0; j < triplet.length; j++) {
      const currentChar = triplets[i][j];
      if (!letterMap[currentChar])
        addToLetterMap(currentChar, triplets.slice(i), letterMap);
    }
  }
  return letterMap;
};

const addToLetterMap = (letterSearchingFor, remainingTriplets, letterMap) => {
  remainingTriplets.forEach((triplet) => {
    let letterMatch = false;
    triplet.forEach((letter) => {
      if (letterMatch) {
        letterMap[letterSearchingFor].add(letter);
      }
      if (letter === letterSearchingFor) {
        letterMatch = true;
        const setExists = letterMap[letterSearchingFor];
        if (!setExists) letterMap[letterSearchingFor] = new Set();
      }
    });
  });
};

const recursiveBruteForce = (currentString, currentChar, goalLength) => {
  const availableChars = currentChar
    ? Array.from(letterMap[currentChar])
    : Object.keys(letterMap);
  if (!Array.isArray(availableChars) || availableChars.length <= 0) {
    if (currentString.length === goalLength) return currentString;
    return null;
  }

  for (let i = 0; i < availableChars.length; i++) {
    const char = availableChars[i];
    let newString = currentString + char;
    const hiddenString = recursiveBruteForce(newString, char, goalLength);
    if (hiddenString) return hiddenString;
  }
  return null;
};

console.log(
  findSecretString([
    ["t", "u", "p"],
    ["w", "h", "i"],
    ["t", "s", "u"],
    ["a", "t", "s"],
    ["h", "a", "p"],
    ["t", "i", "s"],
    ["w", "h", "s"],
  ])
);
