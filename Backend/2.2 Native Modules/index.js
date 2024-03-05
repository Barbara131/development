/** @format */

const fs = require('fs');

// fs.writeFile('new.txt', "I'm new to NodeJS!", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// read the info I typed in the new.txt and log in the terminal
fs.readFile('./new.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
