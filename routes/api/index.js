const router = require('express').Router();
const noteRouter = require('./noteRouter');

router.use('/notes', noteRouter);

module.exports = router;