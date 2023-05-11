type StringNumberPair = [string, number]
const pair: StringNumberPair = ["hello", 2] ;
const first = pair[1]
const second = pair[1];
console.log(first)
function f1(a: any) {
  a.b(); // OK
}
//----Combining Types---
// Union Type |
function combine(input1: string | number, input2: string | number) {

}
// Intersection Type &
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id?: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
type $Employee = Identity | Contact;
let e : Employee = {
     
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
}
console.log(e)
// Type Aliases
type Name = string;
type Age = number;
type User = {name: Name; age:Age}

const user:User = {name: 'John', age: 30}

console.log(user)

// keyOfOperator
interface UserK {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof UserK; // "name" | "age" | "location"
const key: UserKeys = 'name';
console.log(key)
// ---Type Guards / Narrowing --
// 1. instanceof
/**
 * It is used to check if an object is an instance of a class, interface, or type.
 */
class Bird {
  fly() {
    console.log('flying...');
  }
  layEggs() {
    console.log('laying eggs...');
  }
}
const pet = new Object();
if (pet instanceof Bird){
    pet.fly()
}
else{
    console.log("pet is not a bird")
    }
// 2. typeof
/**
 * The typeof operator is used to check the type of a variable. 
 * It returns a string value representing the type of the variable.
 */
let value: string | number = 12;

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}
// 3. Equality
/**
 * TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types.
 *  For example:
 */
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
//4. Truthiness
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}
//5. Type Predicates
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
function example2(x: unknown) {
  if (isString(x)) {
    // We can now call any 'string' method on 'x'.
    x.toUpperCase();
  } else {
    console.log(x);
  }
}
// ------- Functions---
//1. Type Functions
//a. Function declaration with types
function add(a: number, b: number): number {
  return a + b;
}
//b.Arrow function with types
const multiply = (a:number, b:number) : number =>{
    return a*b;
}
//c. Function type:
let devide : (a:number, b:number) => number;
devide =(a,b) => {
    return a/b;
}
//2. Function Overloading
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;

function add2(a: any, b: any): any {
  return a + b;
}

console.log(add2(1, 2)); // 3
console.log(add2('Hello', ' World')); 
// ---Interfaces---
//1.Types vs Intefaces
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};
interface Person2 {
  doWork():void;
}


interface Shape {
  width: number;
  height: number;

}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};
console.log(square)
//3. Inteface Declaration
interface IPerson {
  firstName: string;
  lastName: string;
  age?: number;

  getFullName(): string;
}
// ---Classes---
//modifies access: private, public , protected
// 1. Constructor Params
class Example {
  constructor(private name: string, public age: number) {}

  constructor(private as: string) {}
  }
//2. Access Modifiers
/**
 * public: This is the default access modifier. Properties and methods declared as public can be accessed from anywhere, both inside and outside the class.
  private: Properties and methods declared as private can only be accessed within the same class. They are not accessible from outside the class.
  protected: Properties and methods declared as protected can be accessed within the class and its subclasses. They are not accessible from outside the class and its subclasses.
 */
// 3. Abstract Classes
abstract class Animal{
    abstract makeSound() : void;
    move() : void{
        console.log("moving")
    }
}
class Dog extends Animal implements Person2{
doWork(): void {
throw new Error("Method not implemented.");
}
makeSound(): void {
throw new Error("Method not implemented.");
}
move() : void{
    console.log("hello")
}

}
// 4. Inheritance vs Polymorphism (Ke thua va da hinh)
// 5. Method Overriding

// ---Generics---
//1. Generic types
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("hello")

class GenericNumber<T> {
    zeroValue !: T;
    add !: (x:T, y:T) => T;
}
let myGenericNumber = new GenericNumber<number>()
//2. Generic Constraints
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);

  return arg;
}

loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 }); // OK
// ---Decorators---
function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}
class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
// Output: Calling add with arguments: 1,2
// Output: 3

// ---Utility Types---
//1. Partial
interface UserInfo {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<UserInfo>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);
// Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }
// 2. Pick
/**
 * Pick constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
// 3. Omit
/**
 * Omit constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};
//4. Readonly 
/**
 * Readonly constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// Cannot assign to 'title' because it is a read-only property.
todo.title = 'Hello';
// 5. Record 
/**
 * Record<Keys, Type>
 *Record constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
 */

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};
//6. Exclude
/**
 * Exclude<UnionType, ExcludedMembers>
 * Exclude constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
 */
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
//7. Extract
/**
 * Extract<Type, Union>
 * Extract constructs a type by extracting from Type all union members that are assignable to Union.
 */

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
//    ^ = type T0 = "a"
//8. Non Nullable
/**
 * Non-Nullable constructs a type by excluding null and undefined from Type.
 */
type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]
// 9. Parameters
/**
 * Parameters constructs a tuple type from the types used in the parameters of a function type Type.
 */

type T0 = Parameters<() => string>;
// type T0 = []

type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>;
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]

type T4 = Parameters<any>;
// type T4 = unknown[]

type T5 = Parameters<never>;
// type T5 = never

type T6 = Parameters<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T7 = Parameters<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.

//8. ReturnType
/**
 * Return type constructs a type consisting of the return type of function Type.
 */
type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

declare function f1(): { a: number; b: string };
type T4 = ReturnType<typeof f1>;
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never

type T7 = ReturnType<string>;
// ^ Type 'string' does not satisfy the constraint '(...args: any) => any'.

type T8 = ReturnType<Function>;
// ^ Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//9. InstanceType
/***
 * This type constructs a type consisting of the instance type of a constructor function in Type.
 */
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// type T0 = C

type T1 = InstanceType<any>;
// type T1 = any

type T2 = InstanceType<never>;
// type T2 = never

type T3 = InstanceType<string>;
// ^ Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

type T4 = InstanceType<Function>;
// ^ Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
/**
 * This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
 */
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean
// ---Advanced Types---
//1. Mapped Types
