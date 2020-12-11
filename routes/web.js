const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/uploads");

let routes = app => {
  router.get("/", homeController.getHome);

  router.post("/upload", uploadController.upload);

  return app.use("/", router);
};

module.exports = routes;