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
    console.log(animals[i].name);
    let index = animals.indexOf(animals[i]);

    html += `<li><a href="/animals/${pet_type}/${index}">${animals[i].name}</a></li>`;
  }
  html += '</ul>';

  res.send(`
          <h1>List of ${pet_type}:</h1>
          ${html}
          `);
});

app.get('/animals/:pet_type/:pet_id', (req, res) => {
  const { pet_type, pet_id } = req.params;

  const key = Object.keys(pets).find((key) => {
    return key === pet_type;
  });

  const animals = pets[key];

  const pet = animals.find((animal, index) => {
    if (animals[index] === pet_id) {
      return animal;
    }
    return animal;
  });
  console.log('pet', pet);
  res.send(`
          <img src="${pet.url}" alt="${pet.name}"/>
          <h1>${pet.name}</h1>
          <p>${pet.description}</p>
          <ul>
              <li>Age: ${pet.age}</li>
              <li>Breed: ${pet.breed}</li>
          </ul>

          `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
