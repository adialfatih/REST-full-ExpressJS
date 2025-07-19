const express = require('express');
const router = express.Router();
const controller = require('../controllers/generic.controller');

router.get('/:table', controller.getAll);
router.get('/:table/:id', controller.getById);
router.post('/:table', controller.create);
router.put('/:table/:id', controller.update);
router.delete('/:table/:id', controller.remove);

module.exports = router;
