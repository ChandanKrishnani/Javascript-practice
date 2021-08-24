function addPower(...numsToAdd:any []): string{
  let answer = 0; 
  let answer2='';
  for(let i = 0; i < numsToAdd.length; i++)
  {
    if(typeof numsToAdd[i]==='number')
    {
      answer += numsToAdd[i] ** i;
    }
    else
    {
      answer2+=numsToAdd[i];

    }
  }
  return answer+answer2;
}
let ans=addPower(6,'hello',7,'jkl');
console.log(ans);
