const { User } = require("../models/User");
const { RestaurantOwner } = require("../models/RestaurantOwner");
const log = console.log;

const authenticate = async (req, res, next) => {
    log("authenticate");
    try{
        log("session");

      if (req.session.user) {
            log("Find User");
            const curUser = await User.findById(req.session.user)
            const curRestaurantOwner = await RestaurantOwner.findById(req.session.user)
            log("Finish Finding");
            log("curUser: ", curUser);
            log("curRestaurantOwner: ", curRestaurantOwner);
            
            if(curUser){
                req.user = curUser
                next()
            }

            if(curRestaurantOwner){
                req.user = curRestaurantOwner
                next()
                return;
            }
            res.status(401).send("AUTH: Unauthorized in try")
        }
    }catch(e){
      res.status(401).send("AUTH: Unauthorized in catch")
    }
  }

  module.exports = {authenticate};