const express = require('express');
const router = express.Router();
const controller = require('../controllers/details.controller')

module.exports = () => {
    router.get('/get-details', controller.getAllDetails);
    router.post('/create-detail', controller.createDetail)
    router.delete('/delete-detail/:id', controller.deleteDetail);
    return router;
}
