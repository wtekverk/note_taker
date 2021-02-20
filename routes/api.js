const router = require('express').Router;
const db = require('../db/db.json');
const fs = require('fs')

router.get('/api/notes', (req, res) => 

fs.readFile('../db/db.json', function(err, data){
    var data_ = JSON.parse(data);
    console.log(data_)
})
);


//loops threw arr and concat to array 