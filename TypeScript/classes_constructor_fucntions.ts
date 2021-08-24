class student
{
        name: string;
        reg : number;
        scl: string;
    
     constructor(name:string ,apl:string,reg:number)
    {
        this.name=name;
        this.scl=apl;
        this.reg=reg;
        
    }
}
class greet extends student
{
    message:string;
    constructor(name:string,message:string,reg: number)
    {
   
        super(name,'Creative',reg);
        this.message=message;

    }

    print(): void
    {
     console.log(`hello ${this.name} welcome to ${this.scl} registartion number ${this.reg} message : ${this.message} `);

    }

}
const st=new greet('chandan','Welcome to creative',1192065);
st.print();
