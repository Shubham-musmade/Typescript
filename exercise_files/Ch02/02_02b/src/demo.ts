interface Person extends Address {
    firstName: string;
    lastName: string;
    dob? : Date;
    }

interface Address {
    street: string;
    city: string;
    state: string;
    zip?: string;
}

// I am using ? to make dob optional in the interface if I don't want to pass dob then I can skip it.

let person: Person = {
    firstName: 'Shubham',
    lastName: 'Musmade',
    street: '1234',
    city: 'Deolali',
    state: 'MH',
};

// The Difference between interface and classes is that:
// interface is used to define the structure of an object 
// and classes are used to define the structure of an object and also to define the behavior of an object.

// For example, if I want to define the behavior of the person object then I can use classes.
// but if I only want to define the structure of the person object then I can use an interface.
