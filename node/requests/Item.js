const itemHandler = (req, res, db) => {

    switch (req.params.category){
        case 'material':
            db.raw(`
                    (SELECT * FROM items where item_type = 'material-pre'  OFFSET floor(random()*(SELECT count(id) from items where item_type = 'material-pre')) LIMIT 1)
                    union all 
                    (SELECT * FROM items where item_type = 'material-suf'  OFFSET floor(random()*(SELECT count(id) from items where item_type = 'material-suf')) LIMIT 1);`)
            .then(data => {
                res.send({"material" : Object.values(data)[3][0].name + ' ' + Object.values(data)[3][1].name});
            });
            break;
        case 'item':
                db.raw(`
                        (SELECT * FROM items where item_type = 'item-pre1'  OFFSET floor(random()*(SELECT count(id) from items where item_type = 'item-pre1')) LIMIT 1)
                        union all
                        (SELECT * FROM items where item_type = 'item-pre2'  OFFSET floor(random()*(SELECT count(id) from items where item_type = 'item-pre2')) LIMIT 1)
                        union all 
                        (SELECT * FROM items where item_type = 'item-suf'  OFFSET floor(random()*(SELECT count(id) from items where item_type = 'item-suf')) LIMIT 1);`)
                .then(data => {
                    res.send({"item" : Object.values(data)[3][0].name + ' ' + Object.values(data)[3][1].name + ' ' + Object.values(data)[3][2].name });
                });
            break;
        case 'gun':
                db.raw("SELECT * FROM items where item_type = 'guns'  OFFSET floor(random()*(SELECT count(id) from items where item_type = 'guns')) LIMIT 2 ;")
                .then(data => {
                    res.send({ "gun":Object.values(data)[3][0].name});
                });
            break;
    }
}

module.exports = {
    itemHandler : itemHandler
};