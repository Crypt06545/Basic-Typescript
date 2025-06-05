/**
 * Interfaces and type Aliases
 * *Defining interfaces
 * *Using interfaces to define object shapes
 * *Extending interfaces
 * *Type aliases
 * *Intersection types
 */

/**
 * An interface is like a blueprint that describes the shape 
   of an object. It defines what properties an object should 
   have and what their types should be. Interfaces are only used for type-checking during development 
   and don't produce any JavaScript code at runtime.
*/

// function abcd(a: number, b: string) {
//      a.
//      b.
// }

interface User {
  name: string;
  email: string;
  password: string;
}

function getDataUser(obj: User) {

}
getDataUser({})
// getDataUser({
//   name: "harsh",
//   email: "mehadi@gmailcom",
//   password: "password",
// });
