const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello")
});

app.post('/character/gen',(req, res) => {
    console.log(req.body);
    res.send("ok")
});


app.listen(3000);