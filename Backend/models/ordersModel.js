const express = require('express')
const router = express.Router()

const {postNewOrder,patchOrdeByTitle,deleteOrdeById,getAllOrdes,getOrdeById}=require('../controllers/ordersControl')
router.route("/").post(postNewOrder).get(getAllOrdes)
router.route("/:id").patch(patchOrdeByTitle).delete(deleteOrdeById).get(getOrdeById)

module.exports = router 
