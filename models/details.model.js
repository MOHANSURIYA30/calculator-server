const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    title: { type: String},
    value: { type: String},
     })

const Detail = mongoose.model('details', detailSchema)
module.exports = Detail ;