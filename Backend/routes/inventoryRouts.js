const express = require('express')
const router = express.Router()
const { addInventory, getInventory, deleteInventory, patchInventory } = require('../controllers/inventoryControl')


router.route("/").post(addInventory).get(getInventory)
router.route("/:id").delete(deleteInventory).patch(patchInventory)


module.exports = router
