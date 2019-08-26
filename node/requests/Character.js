const characterHandler = (req, res, db) => {
    db.raw("SELECT * FROM names where cat = '"+req.params.category+"' OFFSET floor(random()*(SELECT count(id) from names where cat = '"+req.params.category+"')) LIMIT 2 ;")
    .then(data => {
        res.send({"Name": Object.values(data)[3][0].name + " " + Object.values(data)[3][1].name, "meaning" : Object.values(data)[3][0].meaning + " - " + Object.values(data)[3][1].meaning});
    });
}

module.exports = {
    characterHandler : characterHandler
};