const UserController = require("../controllers/UserController");
const { authenticate } = require("../authentication/authMiddleware");

const userRoutes = (app) => {
    app.route('/users')
        .get(authenticate, UserController.getAllUsers)
        .post(UserController.createUser);

    app.route('/users/:userId')
        .get(authenticate, UserController.getUserById)
        .put(authenticate, UserController.updateUserById)
        .delete(authenticate, UserController.deleteUserById);
    
    app.route('/users/images/:userId')
        .get(authenticate, UserController.uploadFiles)
        // .delete(UserController.deleteUserImageById)
        // .post(UserController.uploadFiles)
        // app.post('/image')



    // const { Image } = require("../models/Image");
    // const { user } = require("../models/User")
    // const multipart = require('connect-multiparty');
    // const multipartMiddleware = multipart();

    // const cloudinary = require('cloudinary');
    // cloudinary.config({
    //     cloud_name: 'ddmruegqh',
    //     api_key: '184774347592231',
    //     api_secret: 'saxIaNVXpTfTSXS0spLOuBSOF9I'
    // });

    // app.post("/users/images/:id", multipartMiddleware, (req, res) => {
    //     cloudinary.uploader.upload(
    //         req.files.image.path,
    //         function (result) {

    //             var img = new Image({
    //                 image_id: result.public_id,
    //                 image_url: result.url,
    //                 created_at: new Date(),
    //             });
                
    //             img.save().then(
    //                 error => {
    //                     res.status(400).send(error);
    //                 }
    //             );
                
    //             const userId = req.params.id;

    //             user.findByIdAndUpdate(
    //                 userId,
    //                 {
    //                   $set: {
    //                     images: [image_id]
    //                   }
    //                 },
    //                 { new: true }
    //               )

    //         });
    // });

};

module.exports = userRoutes;