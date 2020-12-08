const ImageController = require("../controllers/ImageController");

const imageRoutes = (app) => {
    app.route('/image')
        .get(ImageController.getAllImages)

    app.route('/image/:imageID')
        .get(ImageController.getImageById)
        .delete(ImageController.deleteImageById);


    const { Image } = require("../models/Image");
    const multipart = require('connect-multiparty');
    const multipartMiddleware = multipart();

    const cloudinary = require('cloudinary');
    cloudinary.config({
        cloud_name: 'ddmruegqh',
        api_key: '184774347592231',
        api_secret: 'saxIaNVXpTfTSXS0spLOuBSOF9I'
    });
    app.post("/image", multipartMiddleware, (req, res) => {

        cloudinary.uploader.upload(
            req.files.image.path,
            function (result) {

                var img = new Image({
                    image_id: result.public_id,
                    image_url: result.url,
                    created_at: new Date(),
                });

                img.save().then(
                    saveRes => {
                        res.send(saveRes);
                    },
                    error => {
                        res.status(400).send(error);
                    }
                );
            });
    });
};

module.exports = imageRoutes;