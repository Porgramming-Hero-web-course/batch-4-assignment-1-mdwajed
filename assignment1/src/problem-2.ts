function removeDuplicates(numbers: number[]): number[] {
  return numbers.filter((item, index) => numbers.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
