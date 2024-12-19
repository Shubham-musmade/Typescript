// Type alias for the contact's name, which is a simple string
type ContactName = string;

// Type alias for the possible contact statuses.
// It can either be "active", "inactive", or "new"
type ContactStatus = "active" | "inactive" | "new";

// Type alias for the birth date, which can be a Date object, a number (timestamp), or a string (e.g., a date string)
type ContactBirthDate = Date | number | string;

// The Contact interface represents a contact entity with the following properties:
// - `id`: a unique number identifying the contact.
// - `name`: the name of the contact, using the `ContactName` type (which is just a string).
// - `birthDate`: an optional field for the contact's birth date, which can be a Date, number, or string.
// - `status`: an optional field for the contact's status, using the `ContactStatus` type.
interface Contact {
    id: number;                  // Unique identifier for the contact.
    name: ContactName;           // Name of the contact (string).
    birthDate?: ContactBirthDate; // Optional birthDate, can be Date, number, or string.
    status?: ContactStatus;      // Optional status, can be "active", "inactive", or "new".
}

// The Address interface represents the structure of an address with:
// - `line1`, `line2`: address lines for street information.
// - `province`, `region`: the province and region for the address.
// - `postalCode`: the postal code of the address.
interface Address {
    line1: string;    // Street address line 1.
    line2: string;    // Street address line 2.
    province: string; // Province of the address.
    region: string;   // Region of the address.
    postalCode: string; // Postal code of the address.
}

// The AddressableContact type combines both the `Contact` and `Address` interfaces using the intersection (`&`) operator.
// This type will represent a contact that also has address-related information.
type AddressableContact = Contact & Address;

// Function that takes a `Contact` and returns their birth date as a `Date` object.
// It handles different types of `birthDate`: Date, number (timestamp), and string (date string).
function getBirthDate(contact: Contact) {
    // If birthDate is a number, it is assumed to be a timestamp (milliseconds since January 1, 1970).
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate); // Convert the timestamp to a Date object.
    }
    // If birthDate is a string, we parse it as a date string.
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate); // Convert the string to a timestamp (milliseconds since 1970).
    }
    // If birthDate is already a Date object, return it directly.
    else {
        return contact.birthDate; // Return the Date object as-is.
    }
}

// Example contact object for `primaryContact`.
// This contact is given a `name` and `status` but doesn't have a `birthDate` (it's optional).
let primaryContact: Contact = {
    id: 12345,          // Unique identifier for the contact.
    name: "Jamie Johnson", // Name of the contact.
    status: "active"    // Status of the contact is "active".
}
