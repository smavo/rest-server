require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Peticion GET
app.get('/usuario', function (req, res) {
  res.json('Peticion  GET ejecutada!');
});

//Peticion POST
app.post('/usuario', function (req, res) {
    let body = req.body;

        res.json({
            persona: body
        });
    
  });

  app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;

    res.json({
        id: id
    });
  });

  app.delete('/usuario', function (req, res) {
    res.json('Peticion DELETE ejecutada!');
  });
  

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
    console.log('Puerta de enlace '+'http://localhost:'+ process.env.PORT);
});
  

