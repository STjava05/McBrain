const express = require('express');

const formController = require('../controllers/formController');

const router = express.Router();

router.post('/', formController.setForm);
router.get('/', formController.getForm);
router.patch('/:id', formController.updateForm);
router.delete('/:id', formController.deleteForm);

module.exports = router;