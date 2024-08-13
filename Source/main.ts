interface IUser
{
    readonly firstName : string
    readonly secondName : string        

    toTextString(): void;
}

function LogClass(constructor : Function)
{
    console.log(`constructor: ${constructor}`);
}

@LogClass
class User implements IUser
{
    constructor(firstName : string, secondName : string)
    {
        this.firstName = firstName;
        this.secondName = secondName;
        this.count = 42;
    }

    private count : number

    public firstName: string;
    public secondName: string;

    public toTextString(): string {
        return "'" + this.firstName + "' '" + this.secondName + "' " + this.count
    }
}

console.log("Mixa1")

let user1 : IUser = { 
    firstName : 'User11 Name', 
    secondName : 'User1 Second Name', 
    toTextString: ()=> user1.firstName 
}


let user2 : IUser =  new User('User2 Name', 'User2 Second Name');

console.log(user1.toTextString())
console.log(user2.toTextString())
