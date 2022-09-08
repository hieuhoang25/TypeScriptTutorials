///---------GENERIC TYPE

const hello = (a) => {
    console.log(a);
    return 3;
}

//Generic type
const hello1 = <Type> (a:Type) =>{
    console.log(a);
    return 3;
}

//call
hello1<string>("30")