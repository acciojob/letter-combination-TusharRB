function letterCombinations(input_digit) {
  //Complete the function
	const digitToLetters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  if (input_digit === '') {
    return [];
  }

  const combinations = [''];

  for (const digit of input_digit) {
    const letters = digitToLetters[digit];
    const newCombinations = [];

    for (const combination of combinations) {
      for (const letter of letters) {
        newCombinations.push(combination + letter);
      }
    }

    combinations.length = 0;
    combinations.push(...newCombinations);
  }

  return combinations;
}

module.exports = letterCombinations;
