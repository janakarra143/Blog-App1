const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    category: String,
    image_url: String,
    post_date: String,
    author: String,
    author_image: String,
    author_title: String
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;