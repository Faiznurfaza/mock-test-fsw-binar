const router = require('express').Router()
const userController = require('../../controllers/api/userController')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/logout', userController.logout)

module.exports = router