export function sumSmallestNumbers(numbers: Array<number>): number {
  let swapped = true;
  do{
    swapped = false;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        swapped = true;
      }
    }
  }while(swapped);

  return numbers[0] + numbers[1];
}