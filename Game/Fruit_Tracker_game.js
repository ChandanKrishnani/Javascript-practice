console.log('Welcome to the fruit selection Game');
let fruits=[
    {name: 'mango' , value:0},
    {name : 'orange', value:0},
    {name :'apple', value:0}

]
console.log("You got the following fruits");
fruits.forEach(jk => {
console.log(jk.name);    
});
console.log("So Here it is going to work");
console.log("You have the 3 chances to guess ");
console.log("And there will be five rounds");
console.log("Final result will be displayed in last");
for(let i=1;i<=5;i++)
{
     console.log(`Hey so it ${i} round!`);
     for(let j=1;j<=3;j++)
     {
         console.log(`So here it starts ${j} no of guess :`);
         let prompt = require('prompt-sync')();
         let fruit = prompt('Enter the fruit name :');
         let objIndex = fruits.findIndex((obj => obj.name === fruit));
         console.log(objIndex);
         if(objIndex!=-1)
         {
             fruits[objIndex].value++;
         }
         else
         {
             console.log('Invalid fruit Name !!!!');
         }

     }
     console.log('score after this round ');
     fruits.forEach(jk => {
        console.log(`Score of ${jk.name} is ${jk.value}`);
            
        });

}



