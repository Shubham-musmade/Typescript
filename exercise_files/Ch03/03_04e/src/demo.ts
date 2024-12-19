// Defining a union type for contact statuses.
type ContactStatus = "active" | "inactive" | "new";

// Define the `Address` interface which represents the contact's address.
interface Address {
    street: string;    // Street name or number (string).
    province: string;  // Province or state (string).
    postalCode: string; // Postal code (string).
}

// Define the `Contact` interface to represent a contact with an address.
interface Contact {
    id: number;         // Unique identifier for the contact (number).
    name: string;       // Name of the contact (string).
    status: ContactStatus;  // Status of the contact: "active", "inactive", or "new".
    address: Address;   // Address of the contact, which is an `Address` object.
}

// `Awesome` is a type alias that extracts the type of `postalCode` from the `Contact` interface.
type Awesome = Contact["address"]["postalCode"];  // `Awesome` will be of type `string` (postal code).

// `ContactEvent` is a base interface for events related to a contact.
interface ContactEvent {
    contactId: Contact["id"];  // `contactId` is of type `Contact["id"]`, which is `number`.
}

// `ContactDeletedEvent` extends `ContactEvent`, meaning it inherits the `contactId` property.
interface ContactDeletedEvent extends ContactEvent {
    // Additional properties specific to a deleted contact can be added here.
}

// `ContactStatusChangedEvent` extends `ContactEvent` and includes the old and new status.
interface ContactStatusChangedEvent extends ContactEvent {
    oldStatus: Contact["status"]; // The previous status of the contact.
    newStatus: Contact["status"]; // The new status of the contact.
}

// `ContactEvents` is an interface that defines different events related to a contact.
interface ContactEvents {
    deleted: ContactDeletedEvent;          // Event for when a contact is deleted.
    statusChanged: ContactStatusChangedEvent; // Event for when a contact's status changes.
    // Additional events could be added here (e.g., contact updated, contact created, etc.)
}

// A generic function `getValue` to retrieve a property value from an object.
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];  // Returns the value of the specified property `propertyName` from `source`.
}

// `handleEvent` function accepts an event name and a handler function to process the event.
function handleEvent<T extends keyof ContactEvents>(
    eventName: T,  // The name of the event (e.g., "deleted", "statusChanged").
    handler: (evt: ContactEvents[T]) => void  // The handler function that processes the event of type `T`.
) {
    if (eventName === "statusChanged") { // If the event is a "statusChanged" event, we call the handler.
        handler({ 
            contactId: 1, 
            oldStatus: "active", 
            newStatus: "inactive" 
        }); // Example event data for "statusChanged".
    }
}

// Calling `handleEvent` for a "statusChanged" event with an appropriate handler function.
handleEvent("statusChanged", evt => evt); // Pass the event and handler. The handler just returns the event object.
