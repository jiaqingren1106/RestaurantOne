//const post = require('../models/Post');
const log = console.log;
const post = require("../models/Post")

// const getAllPost = async (req, res) => {
//     try {
//         const posts = await post.find()
//         res.status(200).json({
//             posts
//         })
//     } catch (err) {
//         res.status(500).json({
//             status: 'fail',
//             message: err
//         })
//     }
//}


const getPostById = (req, res) => {
    post.findById(req.params.postId, (err, post) => {
        if (err) {
            res.send(err);
        }
        log("getPostById: ", post);

        res.json(post);
    });
};

const getAllPosts = (req, res) => {
    post.find({}, (err, posts) => {
        if (err) {
            res.send(err);
        }
        log("getAllPosts: ", posts);

        res.json(posts);
    });
};

const createPost = (req, res) => {
    console.log(req.body)
    const newPost = new post(req.body);
    newPost.save((err, post) => {
        if (err) {
            res.send(err);
        }
        log("createPost: ", post);

        res.json(post);
    });
};

const updatePostById = (req, res) => {
    post.findOneAndUpdate({
        _id: req.params.postId
    }, req.body,
        (err, post) => {
            if (err) {
                res.send(err);
            }
            log("updatePostById: ", post);

            res.json(post);
        });
};

const deletePostById = (req, res) => {
    post.remove({
        _id: req.params.postId
    }, (err, post) => {
        if (err) {
            res.send(err);
        }
        log("deletePostById: ", post);

        res.json({
            message: `post ${req.params.postId} successfully deleted`
        });
    });
};


const addreview = (req, res) => {

    post.findById(req.params.postId, (err, singlePost) => {
        if (err) {
            res.send(err);
        }

        let review_list = singlePost['reviews']
        review_list.push(req.params.reviewId)

        post.findByIdAndUpdate(
            req.params.postId,
            {
              $set: {
                reviews: review_list
              }
            },
            { new: true }
        ).then(p => {
            res.json(singlePost)
        })
    
    });

}

module.exports = {getAllPosts, getPostById, createPost, updatePostById, deletePostById, addreview}