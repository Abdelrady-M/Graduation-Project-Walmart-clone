
const fs = require('fs')
const ProdRatingsModel = require('../models/productRatingsModel')


addProdRatings = async (req, res, next) => {
    let ProdRatings = req.body
    try {
        let newProdRatings = await ProdRatingsModel.create(ProdRatings)
        res.status(201).json({ data: newProdRatings })
    } catch (err) {
        res.status(500).json(err)
    }

}
getProdRatings = (req, res, nex) => {
    ProdRatingsModel.find().then((ProdRatings) => {
        res.status(200).json({ data: ProdRatings })
    }).catch((error) => {
        res.status(500).json({ message: error })
    })
}

deleteProdRatings = async (req, res, next) => {
    let { id } = req.params
    try {
        let ProdRatings = await ProdRatingsModel.deleteOne({_id: id})
            res.status(200).json(ProdRatings)
            res.status(400).json({ message: "error" })
        }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

patchProdRatings = async (req, res, next) => {
    let body = req.body
    let { id } = req.params
    try {
        let ProdRatings = await ProdRatingsModel.findOneAndUpdate({ _id: id }, body, { new: true, runValidators: true })
        res.status(200).json(ProdRatings)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { addProdRatings, getProdRatings, deleteProdRatings, patchProdRatings }
