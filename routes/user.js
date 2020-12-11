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

};

module.exports = userRoutes;