var express = require('express');
var router = express.Router();
router.use('/workout', require('./workout'));
router.use('/user', require('./user'));
module.exports = router;
//# sourceMappingURL=index.js.map