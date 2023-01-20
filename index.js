const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Adopt Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/dogs">Dogs</a></li>
        <li><a href="/cats">Cats</a></li>
        <li><a href="/cats">Rabbits</a></li>
    </ul>
    `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
