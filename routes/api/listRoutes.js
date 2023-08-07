const router = require('express').Router()
const listController = require('../../controllers/api/listController')
const { verifySession } = require('../../middlewares/verifySession')

router.get('/', verifySession, listController.getList)
router.post('/', verifySession, listController.addList)
router.patch('/update/:id', verifySession, listController.updateList)
router.delete('/delete/:id', verifySession, listController.deleteList)

module.exports = router