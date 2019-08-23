const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST, OPTIONS, PATCH");
    next();
});

app.use('/api/user', userRoutes);

module.exports = app;