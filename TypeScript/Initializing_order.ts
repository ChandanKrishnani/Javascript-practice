class A
{
    name:string="base";
    constructor()
    {
         console.log(` we are in ${this.name} class`);

    }
    greet():void
    {
        console.log("We are in base class");

    }

}
class B extends A
{
    
    name: string ="derived";
}
const abc = new B();

