const exprees = require('express');
const v1Routes = require('./v1');
const router = exprees.Router();
router.use('/v1',v1Routes);
module.exports = router;
