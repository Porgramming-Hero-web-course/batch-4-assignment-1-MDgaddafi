{
  //
  function countWordOccurrences(values: string, value: string): number {
    const words = new RegExp(`\\b${value}\\b`, "gi");
    const total = values.match(words);
    return total ? total.length : 0;
  }

  // console.log(countWordOccurrences("I love typescript", "typescript"));
  //
}
