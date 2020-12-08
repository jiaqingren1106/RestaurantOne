const PostController = require("../controllers/PostController");

const postRoutes = (app) => {
    app.route('/post')
        .get(PostController.getAllPosts)
        .post(PostController.createPost);

    app.route('/post/:postId')
        .get(PostController.getPostById)
        .put(PostController.updatePostById)
        .delete(PostController.deletePostById);
};

module.exports = postRoutes;