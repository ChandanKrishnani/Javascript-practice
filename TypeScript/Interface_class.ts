interface a
{
    greet(a:string):void;
}
class b implements a
{
    greet(b:string):void
    {
        console.log(`hello mr ${b}`);

    }
}
const abc =new b();
abc.greet('Chandan');

