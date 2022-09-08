// -----Function Type
//Function return value
 //const sum2: (num1: any, num2: any) => any
 const sum = (num1, num2) => {
    return num2+num2
}

sum("hello",2);
//const sum2: (num1: number, num2: number) => number
const sum2 = (num1: number, num2: number) : number =>{
    return num1+num2;
}
sum2(20,30) //
// sum2(20,"hê")//error
//const a: (a: number) => string nếu ko ghi kiểu trả về thì typescipt trả về 
const a = (a: number) =>{
    return a+"";
}
//kiểu function
type functionType = (a: number) => number;
//const sum3: functionType
const sum3:functionType = (a: number) => {
    return a;
}
sum3(2);

// funtion not return value
//const hello: () => void
const hello = () =>{

}
const hello1 = ():void =>{
    
}