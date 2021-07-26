export function findOddAmount(numbers: Array<number>): number {
  const dictionary = {};

  for(let i = 0; i < numbers.length; i++){
    if(dictionary[numbers[i]]){
      dictionary[numbers[i]] =  dictionary[numbers[i]] + 1;
    }else{
      dictionary[numbers[i]] =  1;
    }
  }

  for(const [key, value] of Object.entries(dictionary)){
    if(value % 2 !== 0)
      return Number(key);
  }
  
  return Number(0);
}