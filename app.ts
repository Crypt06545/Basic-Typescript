/**
 * Basic Types
 * Primivite types (number,StaticRange,undefined, bollean)
 * Array
 * Tuples
 * Enums
 * Any , unknown, void , undefined , Never
 */

// Number
let age: number = 5;
let price: number = 19.99;

// String
let myName: string = "Robiul";
let message: string = `Hello, ${myName}!`;

// Boolean
let isActive: boolean = true;
let hasPermission: boolean = false;

// Array
let numbers: number[] = [1, 2, 3, 4, 5]; // numbers array
let names: string[] = ["Alice", "Bob", "Charlie"]; // array of strings
// let mixed: [string, number, boolean] = ["Hello", 42, true];

let nm = ["mehadi", 34, { name: "mehadi" }];

// generaic type sentence:
let booleanFlags: Array<boolean> = [true, false, true];

// tupple
let mixed: [string, number, boolean] = ["Hello", 42, true];

// Enumerations (enum)
// enum UserRoles {
//   Admin = "admin",
//   guest = "guest",
//   Super_Admin = "Super_Admin",
// }
// UserRoles.Admin
// enum StatusCode {
//   ABANDONED = "Abandoned status code 500",
// }

// if we do not define anything then the value is any ,Behaves like default js
// let a
// a= 12
let a: number = 23;
// console.log(a);

// function adcd(): boolean{
//     console.log('hey');
//     return true
//     // if dont return anything and use void

// }

// the function does not work after invoke
// function abcd(): never {
//   while (true) {}
// }
// abcd();
// console.log("hello");
