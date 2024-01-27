const express = require('express')
const router = express.Router()
const { addProdRatings, getProdRatings, deleteProdRatings, patchProdRatings } = require('../controllers/productRatingsControl')


router.route("/").post(addProdRatings).get(getProdRatings)
router.route("/:id").delete(deleteProdRatings).patch(patchProdRatings)


module.exports = router
