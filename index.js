const express = require('express');
const app = express();
const port = 4000;

// With the string interpolation you can return more than one line of code
// You can write HTML code in the string and it will be rendered in the browser
app.get('/', (req, res) => {
  res.send(`
    <h1>Adopt Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/cats">Rabbits</a></li>
    </ul>
    `);
});

app.get('/animals', (req, res) => {
  res.send(`
        <h1>List of pets:</h1>
        `);
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
