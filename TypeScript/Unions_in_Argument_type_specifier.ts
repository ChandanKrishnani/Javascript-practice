function printNumsAndStrings(statement: string | number | number[] | number[] []) {
  console.log(`ℹ️ LOG:: ${statement}`);
}
let jk:number [][]=[[1,2,1,2],[2,3,2,2]];

printNumsAndStrings('hello!');
printNumsAndStrings(100);
printNumsAndStrings([1,2,3]);
printNumsAndStrings(jk);


