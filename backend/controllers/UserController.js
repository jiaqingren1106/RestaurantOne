const user = require('../models/user.js');
const log = console.log;
const upload = require("../middleware/upload")

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
        }
        log("getUserById: ", user);
        res.json(user.populate("reviews"));
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
    const newUser = new user(req.body);
    console.log(user)
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        log("createUser: ", user);
        res.json(user);
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


module.exports = {getAllUsers, getUserById, createUser, updateUserById, deleteUserById, uploadFiles}