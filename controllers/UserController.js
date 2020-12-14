const user = require('../models/User.js');
const log = console.log;
const upload = require("../middleware/upload");
const { set } = require('mongoose');

const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

    return res.send(`Files have been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};

module.exports = {
  uploadFiles: uploadFiles
};

const getUserById = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }else{
            res.json(user)
        }
    });
};

const getAllUsers = (req, res) => {
    user.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        log("getAllUsers: ", users);
        res.json(users);
    });
};

const createUser = (req, res) => {
    const userName = req.body.name
    const newUser = new user(req.body);
    let find = false;
    // console.log("createUser")

    console.log(req.body)
    user.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        for(let i = 0; i < users.length; i++){
            if(users[i].name == userName){
                res.send({"condition": "fail"})
                find = true
            }
        }
        if(find === false){
            newUser.save((err, user) => {
                if (err) {
                    res.send(err);
                }else{
                    console.log("success")
                    res.json({"condition": "success", "id": user['_id']});
                }
            });
        }
    });
};

const updateUserById = (req, res) => {
    user.findOneAndUpdate({
        _id: req.params.userId
    }, req.body,
        (err, user) => {
            if (err) {
                res.send(err);
            }
            log("updateUserById: ", user);
            res.json(user);
        });
};

const deleteUserById = (req, res) => {
    user.remove({
        _id: req.params.userId
    }, (err, user) => {
        if (err) {
            res.send(err);
        }
        log("deleteUserById: ", user);
        res.json({
            message: `user ${req.params.userId} successfully deleted`
        });
    });
};

const addReviewtoUser = (req, res) => {

    const userid = req.params.userId
    const reviewid = req.params.reviewId

    user.findById(userid, (err, singleUser) => {
        if (err) {
            res.send(err);
        }

        let review_list = singleUser['reviews']
        review_list.push(reviewid)

        user.findByIdAndUpdate(
            userid,
            {
              $set: {
                reviews: review_list
              }
            },
            { new: true }
        ).then(singleUser => {
            res.json(singleUser)
        })
    
    });

}


const addFollowtoUser = (req, res) => {

    const userid = req.params.userId
    const followid = req.params.followId

    user.findById(userid, (err, singleUser) => {
        if (err) {
            res.send(err);
        }

        let review_list = singleUser['follows']
        review_list.push(followid)

        user.findByIdAndUpdate(
            userid,
            {
              $set: {
                follows: review_list
              }
            },
            { new: true }
        ).then(singleUser => {
            res.json(singleUser)
        })
    
    });

}


const deleteFollowtoUser = (req, res) => {

    const userid = req.params.userId
    const followid = req.params.followId

    user.findById(userid, (err, singleUser) => {
        if (err) {
            res.send(err);
        }

        let review_list = []

        for(let i = 0; i < singleUser['follows'].length; i++){
            if(singleUser['follows'][i] != followid){
                review_list.push(singleUser['follows'][i])
            }
        }
    
        user.findByIdAndUpdate(
            userid,
            {
              $set: {
                follows: review_list
              }
            },
            { new: true }
        ).then(singleUser => {
            res.json(singleUser)
        })
    
    });

}

module.exports = {getAllUsers, getUserById, createUser, updateUserById, deleteUserById, uploadFiles,
     addReviewtoUser, addFollowtoUser, deleteFollowtoUser}