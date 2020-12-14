// const UserController = require("../controllers/UserController");
// const { authenticate } = require("../authentication/authMiddleware");

// const userRoutes = (app) => {
//     app.route('/users')
//         .get(authenticate, UserController.getAllUsers)
//         .post(UserController.createUser);

//     app.route('/users/:userId')
//         .get(authenticate, UserController.getUserById)
//         .put(authenticate, UserController.updateUserById)
//         .delete(authenticate, UserController.deleteUserById);
    
//     app.route('/users/images/:userId')
//         .get(authenticate, UserController.uploadFiles)
//         // .delete(UserController.deleteUserImageById)
//         // .post(UserController.uploadFiles)
//         // app.post('/image')

// };

// module.exports = userRoutes;


const UserController = require("../controllers/UserController");
const User = require("../models/User");

const userRoutes = (app) => {
    app.route('/users')
        .get(UserController.getAllUsers)
        .post(UserController.createUser);

    app.route('/users/:userId')
        .get(UserController.getUserById)
        .put(UserController.updateUserById)
        .delete(UserController.deleteUserById);
    
    app.route('/users/images/:userId')
        .get(UserController.uploadFiles)
        // .delete(UserController.deleteUserImageById)
        // .post(UserController.uploadFiles)
        // app.post('/image')

    app.route('/users/:userId/:reviewId/:reviewId1')
        .post(UserController.addReviewtoUser)
   
    app.route('/users/:userId/:followId/:followId1/:followId2')
        .post(UserController.addFollowtoUser)
        .delete(UserController.deleteFollowtoUser)
};

module.exports = userRoutes;


