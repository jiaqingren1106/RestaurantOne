const log = console.log;
const menu = require("../models/Menu")


const getMenubyId = (req, res) => {
    menu.findById(req.params.menuId, (err, post) => {
        if (err) {
            res.send(err);
        }
        log("getPostById: ", post);

        res.json(post);
    });
};

const createMenu = (req, res) => {
    console.log(req.body)
    const newMenu = new menu(req.body);
    newMenu.save((err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};


module.exports = {getMenubyId, createMenu}