const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

const Character = require('./requests/Character');
const Place = require('./requests/Place');
const Item = require('./requests/Item');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'shaik',
      password : 'shaik',
      database : 'STNovel'
    }
  });

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Root message
app.get('/', (req, res) => {res.send("hello")});

//Name Generator
app.post('/character/:category', (req, res) => {Character.characterHandler(req, res, db)})
 
//Place Name Generator
app.post('/place/:category', (req, res) => {Place.placeHandler(req, res, db)});

//Item Name Generator
app.post('/item/:category', (req, res) => {Item.itemHandler(req, res, db)});


app.listen(3000);