const PostQuestion = require('../models/postQuestion.js')

const getPosts = async (req, res) => {
    try {
        const postQuestion = await PostQuestion.find();
        res.status(200).json(postQuestion);
    }
    catch (err) {

        res.status(404).json({ message: err.message });
    }
}

const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new PostQuestion(post);

    try {

        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
}


const deletePost = async (req, res) => {
    const { id } = req.params;
    const existingPost = await PostQuestion.findOne({ id });
    if (!existingPost) return res.status(404).send('No post with that id');

    await PostQuestion.findByIdAndRemove(id);

    res.json({ message: 'Post deleted success' })
}
const commentPost = async (req, res) => {


    const { comment, id } = req.body;


    try {

        const existingPost = await PostQuestion.findOne({ _id: id });
        if (!existingPost) return res.status(404).json({ message: "No Such post exist" });
        existingPost.comments.push(comment);
        // console.log(existingPost);

        await existingPost.save();
        res.status(201).json({ message: 'post updated' });
    }
    catch (err) {
        res.status(409).json({ message: err.message });

    }
}

module.exports = { getPosts, createPost, commentPost, deletePost };