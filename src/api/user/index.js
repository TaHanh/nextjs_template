const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.getUser)
router.get('/:id', controller.getId)
router.post('/', controller.postUser)
router.put('/:id', controller.putUser)
router.delete('/:id', controller.deleteUser)

module.exports = router
