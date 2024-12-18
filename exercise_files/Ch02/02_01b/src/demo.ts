// 1. Primitive Types

// number
let age: number = 25;
let pi: number = 3.14;

// string
let Username: string = "Shubham";
let greeting: string = `Hello, ${Username}!`;

// boolean
let isActive: boolean = true;
let isCompleted: boolean = false;

// null and undefined
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// symbol
let uniqueId: symbol = Symbol('id');

// bigint
let bigNumber: bigint = 1234567890123456789012345678901234567890n;

// 2. Special Types

// any
let value: any = 42;
value = "Hello";
value = true;

// unknown
let unknownValue: unknown = "Hello, world!";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // Safe use
}

// void (for functions with no return value)
function logMessage(message: string): void {
  console.log(message);
}

// never (function that throws an error)
function throwError(message: string): never {
  throw new Error(message);
}

// 3. Object Types

// Using object type
let person: object = { name: "Shubham Musmade", age: 23 };

// Using interfaces for more structured objects
interface Person {
  name: string;
  age: number;
}

let personObj: Person = { name: "Shubham Musmade", age: 28 };

// 4. Array Types

let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["apple", "banana", "cherry"];

// Array of objects
let users: { name: string; age: number }[] = [
  { name: "Omkar", age: 30 },
  { name: "GOGO", age: 25 }
];

// 5. Tuple Types
let coordinates: [number, number] = [40.7128, 74.0060]; // Latitude, Longitude

// 6. Union Types
let valueOrString: string | number = "Hello";
valueOrString = 100;

// 7. Intersection Types
interface Job {
  jobTitle: string;
}

interface Employee extends Person, Job {
    employeeId: number;
}

let employee: Employee = {
  name: "Shubham Musmade",
  age: 28,
  jobTitle: "Software Engineer",
  employeeId: 1234
};

// 8. Literal Types
let direction: "left" | "right" = "left";
direction = "right"; // Valid
// direction = "up"; // Error: Type '"up"' is not assignable to type '"left" | "right"'

// 9. Type Aliases
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };

// 10. Enum Types
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Up;

// 11. Function Types
let add: (x: number, y: number) => number = (x, y) => x + y;
let result = add(10, 5);

// 12. Type Assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
