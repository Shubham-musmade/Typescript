// This is a comment but here we are difining a function data type
/**
 * 
 * @param {number} contactId 
 * @returns 
 */
async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  contact.id = 1234
  contact.birthDate = new Date("12/12/1990");
});

// This method is going to return a error because the id is a number and we are trying to change it to a string
// getContact("2").then((contact) => {
//   console.log("Contact: ", JSON.stringify(contact));
// });

// This is not going to return a error because we are changing the id to a number
getContact(2).then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
