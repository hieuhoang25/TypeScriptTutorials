// --------INTERFACE TYPE
// kết thừa sử dụng lại cấu trúc
//export để các file import vào sử dụng
export interface IPerson{
    name:string, age?:number
}
let actor : IPerson;
let singer : IPerson;

actor = {age: 10, name: "John"}
actor1 = { name: "John"}
