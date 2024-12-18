interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("05/05/2001"),
    id: 12345,
    name: "Shubham Musmade",
}

// This is the exalple for type alias
type ContactName = string