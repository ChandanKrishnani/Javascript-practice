class A
{
    protected num=15;
    public getInfo(): Number
    {
        return this.num;
    }
    public greet1(): string
    {
        return "Welcome in greet 1 Of base ";
    }
    protected greet2() : string
    {
        return 'Welcome in great 2 of base ';
    }

}
class B extends A
{
    num=10;
    public greet3()
    {
        console.log(`We are in child class ${super.greet2()} `);
        console.log(`We are in child class ${this.greet1()}`);
    }

}
const abc=new B();
abc.greet3();
console.log(abc.num);
console.log(abc.getInfo());
const jk=new A();
console.log(jk.getInfo());



