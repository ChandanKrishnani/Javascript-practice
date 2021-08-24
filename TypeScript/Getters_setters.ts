class A
{
    name: string;
    reg :number;
   get _name()
   {
       return this.name;
   }
   set _name(value)
   {
       this.name=value;
   }
   get _reg()
   {
       return this.reg;
   }
   set _reg(value)
   {
       this.reg=value;
   }
}
let abc=new A();
abc._name='Chandan';
console.log(abc._name);



