// const mesage = (name) => {
//   console.log(`hello ${name}`);
// };

// mesage("Sawaluddin");

//console.log(process.platform);
// ===================================================

// properti process.memoryUsage()
// const memoryInformation = process.memoryUsage();

// console.log(memoryInformation);
// ===================================================

// properti process.argv();
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);
