const express = require('express');
const bodyParser = require('body-parser');
const names = require('./db/names-db.json');
const places = require('./db/places.json');
const items = require('./db/items.json');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello")
});

//Name Generator
app.post('/character/:category',(req, res) => {
	
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

//Place Name Generator
app.post('/place/:category', (req, res) => {

    const collection = places[req.params.category];
    const len = Object.keys(collection).length;
    
    //generate random place name
    const place = Math.floor(Math.random() * len);

    //send place name along with suffix
    res.send(collection[place] + " " + req.params.category);
});

//Item Name Generator
app.post('/item/:category', (req, res) => {
    
    const param = req.params.category;
    let result;
    let collection1, collection2, collection3;
    let len1, len2, len3;
    let pre, pre1, pre2;
    let suf;

    switch(param){
        case 'material':
            collection1 = items['material-pre'];
            collection2 = items['material-suf'];
            len1 = Object.keys(collection1).length;
            len2 = Object.keys(collection2).length;
            
            //generate random item name
            pre = Math.floor(Math.random() * len1);
            suf = Math.floor(Math.random() * len2);

            //save to result
            result = collection1[pre] + ' ' + collection2[suf];
            break;
        case 'item':
            collection1 = items['item-pre1'];
            collection2 = items['item-pre2'];
            collection3 = items['item-suf'];
            len1 = Object.keys(collection1).length;
            len2 = Object.keys(collection2).length;
            len3 = Object.keys(collection3).length;
            
            //generate random item name
            pre1 = Math.floor(Math.random() * len1);
            pre2 = Math.floor(Math.random() * len2);
            suf = Math.floor(Math.random() * len3);

            //save to result
            result = collection1[pre1] + ' ' + collection2[pre2] + ' ' + collection3[suf];
            break;
        case 'gun':
            collection = items['guns'];
            len = Object.keys(collection).length;
            
            //generate random gun name
            place = Math.floor(Math.random() * len);

            //save gun name
            result = collection[place];
    }
    
    //send item name
    res.send(result);
});

app.listen(3000);