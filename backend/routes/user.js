const UserController = require("../controllers/UserController");

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
};

module.exports = userRoutes;