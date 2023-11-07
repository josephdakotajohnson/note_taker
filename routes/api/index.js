const router = require('express').Router();
const noteRouter = require('./noteRouter');

router.use('/note', noteRouter);

module.exports = router;