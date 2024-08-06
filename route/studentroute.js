const express = require('express')

const studentcontroller = require('./../controller/studentcontroller');
const validation = require('./../validator/validation')

//route instance
const router = express.Router();
router.get('/student', studentcontroller.index);
router.get('/student/:id', studentcontroller.show);
router.post('/student', studentcontroller.store);
router.put('/student', studentcontroller.update);
router.delete('/student', studentcontroller.destroy);

module.exports = router;