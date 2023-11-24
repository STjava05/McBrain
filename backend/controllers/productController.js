const productModel = require('../models/productModel');

module.exports.setProduct = async (req, res) => {
    const { name, description, price, category, quantity, url } = req.body;
    try {
        const product = await productModel.create({
            name,
            description,
            price,
            category,
            quantity,
            url
        });
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.getProduct = async (req, res) => {
    try {
        const product = await productModel.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.updateProduct = async (req, res) => {
    const { name, description, price, category, quantity, url } = req.body;
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id, {
            name,
            description,
            price,
            category,
            quantity,
            url
        });
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json(err);
    }
}
  