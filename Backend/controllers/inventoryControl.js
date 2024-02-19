
const fs = require('fs')
const inventoryModel = require('../models/inventoryModel')


addInventory = async (req, res, next) => {
    let inventory = req.body
    try {
        let newInventory = await inventoryModel.create(inventory)
        res.status(201).json({ data: newInventory })
    } catch (err) {
        res.status(500).json(err)
    }

}
getInventory = (req, res, nex) => {
    inventoryModel.find().then((inventory) => {
        res.status(200).json({ data: inventory })
    }).catch((error) => {
        res.status(500).json({ message: error })
    })
}
deleteInventory = async (req, res, next) => {
    let { id } = req.params
    try {
        let inventory = await inventoryModel.deleteOne({_id: id})
            res.status(200).json(inventory)
            res.status(400).json({ message: "error" })
        }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
patchInventory = async (req, res, next) => {
    let body = req.body
    let { id } = req.params
    try {
        let inventory = await inventoryModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })
        res.status(200).json(inventory)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { addInventory, getInventory, deleteInventory, patchInventory }
