// import the mongoose model
const Image = require("../models/Image");
const log = console.log;

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free


const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'ddmruegqh',
    api_key: '184774347592231',
    api_secret: 'saxIaNVXpTfTSXS0spLOclearuBSOF9I'
});


const getAllImages = (req, res) => {
    Image.find().then(
        images => {
            res.send({ images }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
};

const createImage = (multipartMiddleware, (req, res) => {

    // Use uploader.upload API to upload image to cloudinary server.
    cloudinary.uploader.upload(
        req.files.image.path, // req.files contains uploaded files
        function (result) {

            // Create a new image using the Image mongoose model
            var img = new Image({
                image_id: result.public_id, // image id on cloudinary server
                image_url: result.url, // image url on cloudinary server
                created_at: new Date(),
            });

            // Save image to the database
            img.save().then(
                saveRes => {
                    res.send(saveRes);
                },
                error => {
                    res.status(400).send(error); // 400 for bad request
                }
            );
        });
});

const deleteImageById = (req, res) => {
    const imageId = req.params.imageID;

    cloudinary.uploader.destroy(imageId, function (result) {

        // Delete the image from the database
        Image.findOneAndRemove({ _id: imageId })
            .then(img => {
                if (!img) {
                    res.status(404).send();
                } else {
                    res.send(img);
                }
            })
            .catch(error => {
                res.status(500).send(); // server error, could not delete.
            });
    });
}

const getImageById = (req, res) => {
    const imageId = req.params.imageID;

    Image.findById(imageId, (err, image) => {
        if (err) {
            res.send(err);
        }else{
            res.json(image);
        }
        log("getImageById: ", image);

    })
}
module.exports = {getAllImages, deleteImageById, getImageById, createImage}