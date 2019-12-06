const router = require('express').Router();
const controller = require('./controller');



router.get('/new', controller.new);
router.get('/:id/update', controller.update);
router.get('/:id', controller.show);
router.get('/', controller.index);

module.exports = router;
