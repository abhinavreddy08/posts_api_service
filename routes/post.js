const express = require("express");

const router = express.Router();
const post = require('../models/db');
//create a post
router.post('/',async (req,res)=>{
    const newpost = new post({
        title:req.body.title,
        description:req.body.description
    });
    // newpost.save()
    // .then(data =>{
    //     res.status(200).send(data);
    // })
    // .catch(err =>{
    //     res.status(404).send({
    //         "message":err
    //     });
    // });
    try{
        const savedpost = await newpost.save();
        res.status(200).json(savedpost);
    }catch(Err){
        res.status(404).json({"message":Err});
    }
    

});

//get all posts
router.get('/',async(req,res)=>{
    try{
        const allposts = await post.find();
        res.status(200).send(allposts)
    }catch(Err){
        res.status(404).send({"message":Err});
    }
});

//get a specific post
router.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const singlepost =await post.findById(id);
        res.status(200).json(singlepost);
    }catch(Err){
        res.status(404).send({"message":Err});
    }
});
//delete a post
router.delete('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const removedPost = await post.remove({_id:id});
        res.status(200).json({message:"removed successfully"});
    }catch(err){
        res.status(404).send({"message":err});
    }
});

//update a post
router.put('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const removedPost = await post.updateOne({_id:id},{$set:{title:req.body.title}});
        res.status(200).json({message:"updated successfully"});
    }catch(err){
        res.status(404).send({"message":err});
    }
});

module.exports = router;