// This video is about generics in Ts, TS most powerful feature. Generics are used to create reusable components.
interface Contact {
    id: number;   
    name: string;  
}
interface UserContact {
    id: number;     
    name: string;
    username: string; 
}

// Generic clone function that copies an object of type T1 and returns a new object of type T2
// The type T2 extends T1, meaning T2 can have properties of T1 or more (but not fewer)
function clone<T1, T2 extends T1>(source: T1): T2 {
    // Use Object.apply() to create a shallow copy of the source object.
    // NOTE: There's a typo here; it should be `Object.assign({}, source)` instead of `Object.apply()`.
    return Object.assign({}, source); // This creates a shallow copy of the source object
}

// Example usage:

// A simple Contact object
const a: Contact = { id: 123, name: "Homer Simpson" };

// Using the clone function to create a copy of `a` as a UserContact object.
// `UserContact` extends `Contact`, so it can hold properties of Contact and more.
const b = clone<Contact, UserContact>(a); 
// At this point, `b` has the structure of UserContact but is missing the `username` field.
// You would need to add `username` manually for `b` to be valid.

// Creating an object to represent a date range
const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);

// The following are the possible types for the dateRangeCopy:
// `dateRangeCopy` will have the same shape as `dateRange`, with `startDate` and `endDate` being `number` types.



// Define a generic function
function identity<T>(arg: T): T {
    return arg;
}

// Using the function with different types
let numberResult = identity(42);  // T is inferred to be 'number'
let stringResult = identity("hello world");  // T is inferred to be 'string'

console.log(numberResult);  // Output: 42
console.log(stringResult);  // Output: hello world

// Define a generic class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Create instances of the generic class with different types
const numberBox = new Box(100);  // T is inferred to be 'number'
const stringBox = new Box("TypeScript");  // T is inferred to be 'string'

console.log(numberBox.getValue());  // Output: 100
console.log(stringBox.getValue());  // Output: TypeScript

// Define a generic interface
interface Pair<T, U> {
    first: T;
    second: U;
}

// Create an object that matches the generic interface
const pair: Pair<number, string> = {
    first: 1,
    second: "one"
};

console.log(pair);  // Output: { first: 1, second: "one" }
