const router = require('express').Router()

const userAPIRoutes = require('./api/userRoutes')
const listAPIRoutes = require('./api/listRoutes')

router.use('/api/user', userAPIRoutes)
router.use('/api/list', listAPIRoutes)

module.exports = router