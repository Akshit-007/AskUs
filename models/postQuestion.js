const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    email: String,
    creator: String,
    comments: [String],
    showComments: {
        type: Boolean,
        default: false
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postQuestion = mongoose.model('PostQuestion', postSchema);

module.exports = postQuestion;