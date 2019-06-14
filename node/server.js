const express = require('express');
const bodyParser = require('body-parser');
const names = require('./db/names-db.json');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello")
});

//Name Generator
app.post('/character/gen/:category',(req, res) => {

    const collection = names[req.params.category];
    const len = Object.keys(collection).length;
    
    //generate random first name and last name
    const FirstName = Math.floor(Math.random() * len);
    const LastName = Math.floor(Math.random() * len);
    
    let result = {};

    //if chinese then add meaning to object
    if(req.params.category == 'boy-c' || req.params.category == 'girl-c')
    {        
        result.name = collection[FirstName].name + " " + collection[LastName].name;
        result.meaning = collection[FirstName].meaning == collection[LastName].meaning?collection[LastName].meaning : collection[FirstName].meaning + ' /// ' + collection[LastName].meaning;
    }

    else{
        result.name = collection[FirstName].name + " " + collection[LastName].name;
    }

    //send object as response
    res.send(result);
});


app.listen(3000);