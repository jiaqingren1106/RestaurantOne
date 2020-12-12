const MenuController = require("../controllers/MenuController");

const menuRoutes = (app) => {
    app.route('/menu')
        .post(MenuController.createMenu);

    app.route('/menu/:menuId')
        .get(MenuController.getMenubyId)
};

module.exports = menuRoutes;