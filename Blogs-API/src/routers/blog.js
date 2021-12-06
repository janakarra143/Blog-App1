const express = require("express");
const { isValidObjectId } = require("mongoose");
const Blog = require("../models/blog");
const router = new express.Router();

router.get('/blogs', async (req, res) => {
    try{
        const blogs = await Blog.find({});
        res.status(200).send(blogs)
    }catch(error){
        res.status(500).send(error)
    }
})

router.get('/blogs/:id', (req, res, next) => {
    try{
        Blog.findById(req.params.id).then(blog =>{
            res.status(200).send(blog)
        });
        
    }catch(error){
        res.status(500).send(error)
    }
 
})

router.put('/blogs/:id', (req, res) => {
    if(!isValidObjectId(req.params.id)){
        return res.status(400).send('No records with the given ID: ${req.params.id} ')
    }

    var tmp = {
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        image_url: req.body.image_url,
        post_date: req.body.post_date,
        author: req.body.author,
        author_image: req.body.author_image,
        author_title: req.body.author_title
    };

    Blog.findByIdAndUpdate(req.params.id, { $set: tmp }, {new: true}, (err, doc) =>{
        if(!err) {res.send(doc);}
        else{console.log("Error in employee update:" + JSON.stringify(err, undefined, 2))}
    } )
 
})

router.delete('/blogs/:id', (req, res) => {
    if(!isValidObjectId(req.params.id)){
        return res.status(400).send('No records with the given ID: ${req.params.id} ')
    }



    Blog.findByIdAndDelete(req.params.id, (err, doc) =>{
        if(!err) {res.send(doc);}
        else{console.log("Error in employee delete:" + JSON.stringify(err, undefined, 2))}
    } )
 
})



router.post('/blogs', async(req, res) => {
    const blog = new Blog(req.body);
    try{
        await blog.save();
        res.status(201).send(blog);
    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;