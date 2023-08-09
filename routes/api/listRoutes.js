const router = require('express').Router()
const listController = require('../../controllers/api/listController')

router.get('/:id', listController.getList)
router.post('/:id', listController.addList)
router.patch('/update/:id', listController.updateList)
router.delete('/delete/:id', listController.deleteList)

module.exports = router