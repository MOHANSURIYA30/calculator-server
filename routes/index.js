const express = require('express')
const router = express.Router();

const detailRoutes = require('./details');

module.exports = () => {
    router.use('', detailRoutes());
    router.get("*", (req, res) => {
        res.status = 404;
        res.json({
            success: false,
            message: "Unknown command, that means you have done something wrong.",
            errorCode: 404,
            result: {},
        });
    });

    return router
}