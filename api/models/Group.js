
module.exports = {

  attributes: {
    name:{type: 'string', required: true},
    books:{
      collection:'book',
      via:'Type'
    }
  },

  customToJSON: function() {
    // No password return result copy
    return _.omit(this, ['GName']);
  },

};
