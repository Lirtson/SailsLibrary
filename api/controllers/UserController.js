/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var jwt = require('jsonwebtoken');
var bcr = require('bcryptjs');

module.exports = {
  login: function(req, res) {

    if (!(req.body.email)||!(req.body.password)) {
      //return res.serverError("No field should be empty.");
      return res.status(500).json({'code':500,'message':'No field should be empty.','data':null});
    }
    User.findOne({
      email: req.body.email
    }).exec(function callback(err, user) {
      if (err) {return res.status(500).json({'code':500,'message':'error','data':null});}
      if (!user) {return res.status(500).json({'code':500,'message':'User not found, please sign up.','data':null});}//return res.serverError("User not found, please sign up.");
      require('bcryptjs').compare(req.body.password, user.password, (error, matched) => {
        if (error) {return res.status(500).json({'code':500,'message':'error','data':null});}//return res.serverError(error);
        //if (!matched) return res.status(500).json({"code":500,"message":"Invalid password.","data":null});//return res.serverError("Invalid password.");
        var keykey='';
        if(user.isAdmin===1) {keykey='admin ';}//如果是管理员
        user.token = jwt.sign(user.toJSON(), keykey+'Your secret key is here', {
          expiresIn: '7d'
        });
        res.status(200).json({'code':200,'message':'login successfully','data':user});
      });
    });
  },
  token: function(req, res) {
    User.findOne(req.user.id).exec(function callback(error, user) {
      if (error) {return res.status(500).json({'code':500,'message':'error','data':null});}
      if (!user) {return res.status(500).json({'code':500,'message':'User not found, please sign up.','data':null});}

      user.token = jwt.sign(user.toJSON(), 'Your secret key is here', {
        expiresIn: '7d'
      });
      res.status(200).json({'code':200,'message':'login successfully','data':user});
    });
  },
  register:async function (req,res) {
    var createdUser = await User.create({password: req.body.password.toString(), email: req.body.email,isAdmin:0}).fetch();
    return res.status(200).json({'code':200,'message':'register successfully','data':createdUser});
  },
/*
  function getUserId (req) {
    //返回-1即没有
    var mytoken = req.headers['authorization'];
    var bearer = mytoken.split(" ");
    var bearerToken = bearer[1];

    jwt.verify(bearerToken, "Your secret key is here", function (err, decoded) {

      if (err) {
        //sails.log("verification error", err);
        if (err.name === "TokenExpiredError")
          //return res.forbidden("Session timed out, please login again");
          return -1;
        else
          //return res.forbidden("Error authenticating, please login again");
          return -1;
      }

      User.findOne(decoded.id).exec(function callback(error, user) {
        if (error) return -1;//return res.serverError(err);
        if (!user) return -1;//return res.serverError("User not found");
        return user.id;//返回user id
      });

    });
  }

 */
};
