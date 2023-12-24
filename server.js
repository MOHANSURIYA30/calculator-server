const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const dbCon = require('./config/db_config/database')
const PORT = process.env.PORT || 3000
const routes = require("./config/constants/routes")

mongoose.connect(dbCon.mongoConf.conString, dbCon.mongoConf.options)
    .then((res) => { console.log("MongoDB connection established"); })
    .catch((err) => { console.log("Couldnt connect to MongoDB" + err); })

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use('/api/backend', routes.webRoute());

app.get('/', (req, res, next) => {
    res.send("Hello from server");
})

app.listen(PORT,"0.0.0.0", () => {
    console.log("Server running on port :: " + PORT);
}) 
