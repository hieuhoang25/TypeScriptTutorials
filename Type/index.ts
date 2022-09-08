// Basic Type
//string
let firstName = "Hi Code";
let lastName : string;

lastName = "Hi Code";
// lastName = 1;//loi
//number
let age = 30;
let age1:number = 30 ;
// age = "string";
age = "string".length;

//boolean
let isValid = true;
let isEnabled : boolean = false;

//undefined, null
let k:undefined;
let m: null;
// any
let anyType:any;
anyType = 30;
anyType = "String";
anyType = true;

// Object type

let singer = {};
// singer.name = "hello"//error!
let singer1 = {name:"Den Vau"}
singer1.name = "SonTung";

let actor : {name:string, age:number} = {name : "tom", age :50}

// only set name field? 
let persion : {name:string, age?:number} = {name:"tom"};
// --- Array Type
//any[]
 let array : any[]; // ~ let array : any[] 
 array.push("1");
// string array
let array2 = ["1", "2", "3", "4", "5"] // let arrays : string[]
let array3 : string[] ;
array3.push("1");
// array3.push(2); // error!

// number array
let array3: number[]
//object array

let blogs : {title: string, body: string} [];
// blogs.push({body: "hello",title:30})//error
blogs.push({body: "hello",title:"30"})


