const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController'); 

router.get('/', blogController.index);
router.get('/:id', blogController.show);
router.post('/', blogController.store);
router.put('/:id', blogController.update);
router.delete('/:id', blogController.destroy);

module.exports = router;