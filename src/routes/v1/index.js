const express = require('express');
const { infoController } = require('../../controllers');
const router = express.Router();
// Define your v1 routes here
router.get('/info', infoController.info);
module.exports = router;