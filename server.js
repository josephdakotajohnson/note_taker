const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.emv.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`App listening on Port:  ${PORT}  :D`);
});

console.log("Server started!");