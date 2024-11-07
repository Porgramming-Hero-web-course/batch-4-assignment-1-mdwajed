function countWordOccurrences(sentence: string, word: string): number {
  const wordsArray = sentence.toLowerCase().split(" ");
  const newWord = word.toLowerCase();

  return wordsArray.filter((w) => w === newWord).length;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
