/**
 * Record.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ownerId:{type: 'number', required: true},
    bookId: {type: 'number', required: true},
  },

};

