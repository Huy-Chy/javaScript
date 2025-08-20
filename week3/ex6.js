const person = { name: 'Bob', address: { city: 'Phnom Penh', zip: 12345 } };
const {name,address:{city,zip} }=person;

console.log("Name = '"+person.name + " ,city = '" + city +"'");