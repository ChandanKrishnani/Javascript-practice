class A
{
    greet()
    {
        console.log('Welcome chandan Krishani');
    }
}
class B extends A
{
    greet(s?: string)
    {
        if(s===undefined)
        {
            super.greet();
        }
        else
        {
        console.log(`hello ${s} `);
        }
    }
}
const abc=new B();
abc.greet();
abc.greet('chandan');
