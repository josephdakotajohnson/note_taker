const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// router.get post delete?
router.get('/', (req, res) => {
    console.log('Hello!')
    fs.readFile('./db/db.json', 'utf8', (error, data) =>
        error ? console.error(error) : res.json(JSON.parse(data))
        // console.log(data)
    );
});

router.post('/', (req, res) => {
    console.log("Information from user: ", req.body)
    fs.readFile('./db/db.json', 'utf8', (error, data) => {
        console.log("Information from database: ", JSON.parse(data))
        var oldNotes = JSON.parse(data);
        oldNotes.push(req.body);
        console.log("New notes combined with old ones: ", oldNotes);

        fs.writeFile('./db/db.json', JSON.stringify(oldNotes), (error) => {
            error ? console.error(error) : res.json({message: "Added a new note!"})
        });
    });
});

module.exports = router;