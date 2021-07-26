export function sameXOAmount(str: string): boolean {
  let total = 0;

  for(let i = 0; i < str.length; i++){
    const chr = str.charAt(i).toLowerCase();
    if(chr === 'o'){
      total++;
    }

    if(chr === 'x'){
      total--;
    }
  }

  if(total === 0){
    return true;
  }

  return false;
}