interface Contact {
    id: number;
    name: string;
}


// This is JS function that takes an object and returns a clone of the object
function clone(source: Contact) {

    // return source; // This will return the same object's
    return Object.apply({}, source); // This will return type any
}

const a: Contact = {id:12, name:"Shubham"};
const b = clone(a);