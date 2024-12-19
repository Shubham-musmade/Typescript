// Type alias for the name of the contact, which is simply a string.
type ContactName = string;

// Type alias for the status of the contact, which is a union type. 
// It can either be "active", "inactive", or "new".
type ContactStatus = "active" | "inactive" | "new";

// Type alias for the birthDate of a contact. It can be a Date object, a number (timestamp), or a string.
type ContactBirthDate = Date | number | string;

// The Contact interface defines the structure of a contact object.
// It includes:
// - `id`: a unique identifier for the contact (required).
// - `name`: the name of the contact (required).
// - `birthDate`: an optional field that can be a Date, number (timestamp), or string.
// - `status`: an optional field representing the current status of the contact ("active", "inactive", or "new").
interface Contact {
    id: number;                  // The unique ID of the contact.
    name: ContactName;           // The name of the contact (string).
    birthDate?: ContactBirthDate; // An optional birthDate field (Date, number, or string).
    status?: ContactStatus;      // An optional status field (active, inactive, or new).
}

// Example usage of the `Contact` interface to create a `primaryContact` object.
let primaryContact: Contact = {
    id: 12345,                // Unique identifier for this contact.
    name: "Jamie Johnson",    // The name of the contact.
    status: "active"          // The status of the contact.
};

// `keyof Contact` generates a union type of all the keys in the `Contact` interface.
// This allows us to list the valid keys of a `Contact` object (e.g., "id", "name", "birthDate", "status").
type ContactFields = keyof Contact;

// We specify that `field` should be one of the keys in the `Contact` interface.
const field: ContactFields = "status"; // "status" is a valid key of `Contact`.

// A generic function `getValue` that retrieves the value of a property from an object.
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];  // Access the value of the property using the provided key.
}

// Example usage of `getValue`. We pass an object and a property name.
// In this case, `source` is `{min: 1, max: 34}` and `propertyName` is `"max"`.
const value = getValue({ min: 1, max: 34 }, "max"); // Returns the value of "max", which is 34.
