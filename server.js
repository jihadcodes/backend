const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send([
    {
      name: 'John Doe',
      age: 40,
    },
    {
      name: 'Jane Doe',
      age: 25
    }   
  ]);
});

app.listen(8000);
