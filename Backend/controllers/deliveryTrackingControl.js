const fs = require('fs')
const deliveryTrackingModel = require('../models/deliveryTrackingModel')
const { title } = require('process')

postNewDeliveryTracking = async (req, res, next) => {
    let body = req.body
    try {
        let deliveryTrackingControl = await deliveryTrackingModel.create(body)
        res.status(201).json({ message: "created successfully", data: deliveryTrackingControl })
    } catch (err) {
        res.status(400).json(err)
    }
}
patchDeliveryTrackingByTitle = async (req, res, next) => {
    let body = req.body
    let { id } = req.params
    try {
        let deliveryTracking = await deliveryTrackingModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })
        res.status(200).json(deliveryTracking)
    } catch (err) {
        res.status(500).json(err)
    }
}
deleteDeliveryTrackingById = async (req, res, next) => {
    let { id } = req.params
    try {
        let deliveryTracking = await deliveryTrackingModel.deleteOne({_id: id})
            res.status(200).json(deliveryTracking)
            res.status(400).json({ message: "error" })
        }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
getAllDeliveryTracking = (req, res, nex) => {
    deliveryTrackingModel.find().populate({path:'userId',select:'email -_id'}).then((deliveryTracking) => {
        res.status(200).json({ data: deliveryTracking })
    }).catch((error) => {
        res.status(500).json({ message: error })
    })
}
getDeliveryTrackingById = async (req, res, next) => {
    let { id } = req.params
    try {
        let deliveryTracking = await deliveryTrackingModel.findById(id)
        if (Order) {
            res.status(200).json(deliveryTracking)
        } else {
            res.status(400).json({ message: "error" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = {postNewDeliveryTracking,patchDeliveryTrackingByTitle,deleteDeliveryTrackingById,getAllDeliveryTracking,getDeliveryTrackingById}
