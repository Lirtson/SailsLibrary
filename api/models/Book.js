/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Author:{type: 'string', required: true},
    Name: {type: 'string', required: true,maxLength: 200,minLength: 2},
    Price: {type: 'number',required: true},

    Type:{
      model:'group'
    },

    coverUrl:{type: 'string'},
    coverFd: {type: 'string'},

    owner:{
      model:'user'
    }
  },
  customToJSON: function() {
    // No password return result copy
    return _.omit(this, []);
  },

};

