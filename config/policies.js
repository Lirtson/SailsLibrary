/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */
module.exports.policies = {
  UserController: {
    //token: 'isAuth'
  },
  BookController:{
    add1:'isAdmin',
    delete1:'isAdmin',
    update1:'isAdmin',
    borrow:'isAuth',
    uploadCover:'isAdmin'
  }
};
