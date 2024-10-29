// let employee : {
//     id:number,
//     name:string
// }={id:1,name:""};

// employee.name="anik"

// let employee : {
//     id:number,
//     name?:string
// }={id:1,name:""};

// employee.name="anik"

// let employee : {
//   readonly id:number,
//     name:string
// }={id:1,name:"anik"};



// let employee: {
//     readonly id: number,
//     name: string,
//     retire:(date:Date)=>void
// } = { id: 1, name: "anik" , retire:(date:Date)=>{
//     console.log(date)
// }};

type Employee={
    readonly id: number,
    name: string,
    retire:(date:Date)=>void
}


let employee: Employee = { id: 1, name: "anik" , retire:(date:Date)=>{
    console.log(date)
}};

