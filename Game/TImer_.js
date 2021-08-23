console.log('--Stop Watch--');
console.log('Press the number as required');
console.log('Press 1 for fixed time stopWatch ');
console.log('Press 2 to for stoping manually:');
let prompt = require('prompt-sync')();
let i=1;
let ch = prompt('Enter your choice here : ');
if(ch==1)
{
    let prompt = require('prompt-sync')();
    var hour=  prompt("Enter the duration in hours : ");
    var tm = prompt('Enter the duration in minutes : ');
    var min=tm-1;
    tm=parseInt(tm)+hour*60;
    console.log(tm);
    while(i<(tm*61))
    {
            jk(i);
            i++;
    }
}
var sec=60;
var h=hour;
function jk(n)
{
    
    setTimeout(() => {
        console.clear();

        if(sec<0)
        {
    
            sec=60;
            min--;
        }
        if(min<0)
        {

            min=60;
            h--;
        }
        console.log(`  ${h} : ${min} : ${sec--}`);
        
    }, 10 * n );

}
