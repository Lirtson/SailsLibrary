/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require("bcryptjs");

module.exports = {
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    password: 'string',
    email: 'string',
    isAdmin:'number',
    books:{
      collection:'book',
      via:'owner'
    }
  },

  customToJSON: function() {
    // No password return result copy
    return _.omit(this, ['password'])
  },
  /*
  beforeCreate: function(values, cb) {
    // Password before each creation
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });

  }
   */
  };
