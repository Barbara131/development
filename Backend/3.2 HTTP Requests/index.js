/** @format */

import express from 'express';
const app = express();
const portNum = 6060;

app.get('/', (req, res) => {
  res.send('<h3>Welcome to ExpressJS</h3>');
});

// localhost/contact page
app.get('/contact', (req, res) => {
  res.send('<h1>About Me</h1><p>Phone No: +234 9066188037,</p>');
});

// localhost/about page
app.get('/about', (req, res) => {
  res.send(
    "<h1>About Me</h1><h3><i>Hello! I'm a creative individual with a passion for language and technology. <br> As an enthusiast of the written word, I find joy in crafting compelling content and exploring the endless possibilities of communication. <br> My background includes a keen interest in diverse topics, ranging from science and technology to arts and culture.</i></h3>"
  );
});

app.listen(portNum, () => {
  console.log(`Server is running on port ${portNum}`);
});
