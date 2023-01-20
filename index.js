const express = require('express');
const app = express();
const port = 4000;
// const { animals }= require('./data/animals');
// import { pets } from './helper.js';
const pets = require('./helper.js');
// With the string interpolation you can return more than one line of code
// You can write HTML code in the string and it will be rendered in the browser
app.get('/', (req, res) => {
  res.send(`
    <h1>Adopt Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>
    `);
});

app.get('/animals/:pet_type', (req, res) => {
  const { pet_type } = req.params;

  const key = Object.keys(pets).find((key) => {
    return key === pet_type;
  });

 
  const animals = pets[key];
  let html = '';
  html += '<ul>';
  for (let i = 0; i < animals.length; i++) {
    html += `<li>${animals[i].name}</li>`;
  }
  html += '</ul>';

  res.send(`
          <h1>List of ${pet_type}:</h1>
          ${html}
          `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
