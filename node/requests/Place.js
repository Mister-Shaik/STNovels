const placeHandler = (req, res, db) => {
    db.raw("SELECT * FROM places where place = '"+req.params.category+"' OFFSET floor(random()*(SELECT count(id) from places where place = '"+req.params.category+"')) LIMIT 1 ;")
    .then(data => {
        res.send({"Name" : Object.values(data)[3][0].name + " " + Object.values(data)[3][0].place});
    });
}

module.exports = {
    placeHandler : placeHandler
};