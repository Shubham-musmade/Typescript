// Example of using `typeof` to check the type of primitive values

const x = "string";  // `x` is a string.
const y = true;      // `y` is a boolean.

// Using `typeof` to check the type of `x` and `y`:
console.log(typeof x); // --> "string"    (Returns "string" because `x` is a string.)
console.log(typeof y); // --> "boolean"   (Returns "boolean" because `y` is a boolean.)

// Define custom type aliases for properties in a contact

type ContactName = string;  // Alias for `string`, used to represent the contact's name.
type ContactStatus = "active" | "inactive" | "new";  // Union type for possible contact statuses.
type ContactBirthDate = Date | number | string;  // Union type representing contact birth date. It can be a `Date`, `number` (timestamp), or `string` (date string).

// The `Contact` interface represents a contact object with required and optional properties.
interface Contact {
    id: number;                  // The unique identifier for the contact (required).
    name: ContactName;           // The name of the contact (required).
    birthDate?: ContactBirthDate; // Optional `birthDate`, which could be a `Date`, `number`, or `string`.
    status?: ContactStatus;      // Optional `status`, which could be "active", "inactive", or "new".
}

// Function to convert either a string (name) or an existing `Contact` object into a valid `Contact` object.
function toContact(nameOrContact: string | Contact): Contact {
    // Check if the input is an object (i.e., an existing `Contact` object).
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,            // Copy `id` from the `Contact` object.
            name: nameOrContact.name,        // Copy `name` from the `Contact` object.
            status: nameOrContact.status     // Copy `status` from the `Contact` object, which is optional.
        }
    }
    // If the input is a string (i.e., the name of the contact).
    else {
        return {
            id: 0,                            // Set `id` to 0 as a default (since we don't have one from a `Contact` object).
            name: nameOrContact,              // Set `name` to the string passed as input.
            status: "active"                  // Set the `status` to "active" by default.
        }
    }
}

// Define an object `myType` with two properties: `min` and `max`.
const myType = { min: 1, max: 200 };

// Define a function `save` that only accepts objects with the same shape as `myType`.
function save(source: typeof myType) {
    // The function expects `source` to have exactly the same properties as `myType`.
    // In this case, `source` must have `min` and `max` properties, both numbers.
}
