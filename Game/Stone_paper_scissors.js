const pieces=['paper','stone','scissors'];
while(true)
{
let comp=Math.floor(Math.random() * 3);
let prompt=require('prompt-sync')();
let ch=prompt('Enter Your choice : ');
let index=pieces.findIndex(obj => obj===ch);
if(index===-1)
{
  console.log('Incorrect value by user')
}
else
{
  console.log(`value of user : ${pieces[index]} , value of computer ${pieces[comp]}`);
  if(index===comp)
  {
    console.log("Math tied");
  }

  else if(pieces[index]==='paper' && pieces[comp]==='scissors' || pieces[comp]=='stone' && pieces[index]=='scissors' || pieces[comp]==='paper' && pieces[index]==='stone')
  {
    console.log("Computer won");

  }
  else
  {
    console.log("User won");
  }
}
console.log("Want to play again ? ");
let loo=prompt("Enter your choice (yes/no) : ");
if(loo==='no')
{
  break;
}

}

