const fs = require('fs')
const ordersModel = require('../models/ordersModel')
const { title } = require('process')

postNewOrder = async (req, res, next) => {
    let body = req.body
    try {
        let newOrder = await ordersModel.create(body)
        res.status(201).json({ message: "created successfully", data: newOrder })
    } catch (err) {
        res.status(400).json(err)
    }
}
patchOrdeByTitle = async (req, res, next) => {
    let body = req.body
    let { id } = req.params
    try {
        let Order = await ordersModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })
        res.status(200).json(Order)
    } catch (err) {
        res.status(500).json(err)
    }
}
deleteOrdeById = async (req, res, next) => {
    let { id } = req.params
    try {
        let Order = await ordersModel.deleteOne({_id: id})
            res.status(200).json(Order)
            res.status(400).json({ message: "error" })
        }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
getAllOrdes = (req, res, nex) => {
    ordersModel.find().populate({path:'userId',select:'email -_id'}).then((Order) => {
        res.status(200).json({ data: Order })
    }).catch((error) => {
        res.status(500).json({ message: error })
    })
}
getOrdeById = async (req, res, next) => {
    let { id } = req.params
    try {
        let todo = await ordersModel.findById(id)
        if (Order) {
            res.status(200).json(Order)
        } else {
            res.status(400).json({ message: "error" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = {postNewOrder,patchOrdeByTitle,deleteOrdeById,getAllOrdes,getOrdeById}
