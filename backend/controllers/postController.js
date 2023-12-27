const postModel = require('../models/postModel');


module.exports.setPost = async (req, res) => {
    const { title, description, img } = req.body;
    try {
        const post = await postModel.create({
            title,
            description,
            img
        });
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.getPost = async (req, res) => {
    try {
        const post = await postModel.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}
module.exports.getSinglePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, img } = req.body;
    try {
        const post = await postModel.findByIdAndUpdate(id, {
            title,
            description,
            img
        }, { new: true });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await postModel.findByIdAndDelete(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
}