{
  //
  function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
  }
  const numbers = [1, 2, 2, 3, 4, 4, 5]; // Input:
  // console.log(removeDuplicates(numbers)); // Output:
  //
}
