const express = require('express')
const router = express.Router()

const {postNewDeliveryTracking,patchDeliveryTrackingByTitle,deleteDeliveryTrackingById,getAllDeliveryTracking,getDeliveryTrackingById}=require('../controllers/deliveryTrackingControl')

router.route("/").post(postNewDeliveryTracking).get(getAllDeliveryTracking)
router.route("/:id").patch(patchDeliveryTrackingByTitle).delete(deleteDeliveryTrackingById).get(getDeliveryTrackingById)

module.exports = router 
