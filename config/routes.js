/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  //'post /bbb': 'BookController.bbb',
  'post /api/v1/book/borrow/:bookId': 'BookController.borrow',

  //User
  'post /api/v1/user/login': 'UserController.login',
  //'get /user/token': 'UserController.token',
  'post /api/v1/user/register':'UserController.register',

  //Book
  'POST /api/v1/book':'BookController.add1',
  'DELETE /api/v1/book/:bookId':'BookController.delete1',
  'PUT /api/v1/book/:bookId':'BookController.update1',

  'GET /api/v1/book/:bookId':'BookController.get1',
  'GET /api/v1/book':'BookController.getAll',

  'POST /api/v1/book/:bookId/cover':'BookController.uploadCover',
  'GET /api/v1/book/:bookId/cover ':'BookController.cover',

  'GET /api/v1/stats':'GroupController.f2',



/*'POST /book/myadd':'BookController.myadd',
'ALL /book/add1': {view:'book/add1'},
'POST /book/mydelete':'BookController.mydelete',
'ALL /book/delete1':{view:'book/delete1'},
'ALL /book/update1':{view:'book/update1'},
'POST /book/myupdate':'BookController.myupdate',
'ALL /book/menu1':{view:'book/menu1'},
'ALL /book/find1':{view:'book/find1'},
'POST /book/myfind':'MiaoController.myfind',
'ALL /book/show1':'BookController.myshow',

'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

'GET /faq':                { action:   'view-faq' },
'GET /legal/terms':        { action:   'legal/view-terms' },
'GET /legal/privacy':      { action:   'legal/view-privacy' },
'GET /contact':            { action:   'view-contact' },

'GET /signup':             { action: 'entrance/view-signup' },
'GET /email/confirm':      { action: 'entrance/confirm-email' },
'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

'GET /login':              { action: 'entrance/view-login' },
'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
'GET /password/new':       { action: 'entrance/view-new-password' },

'GET /account':            { action: 'account/view-account-overview' },
'GET /account/password':   { action: 'account/view-edit-password' },
'GET /account/profile':    { action: 'account/view-edit-profile' },


//  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
//  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
//  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
'/terms':                   '/legal/terms',
'/logout':                  '/api/v1/account/logout',


//  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
//  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
//  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
// …


//  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
//  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
//  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
// Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
// from the Parasails library, or by using those method names as the `action` in <ajax-form>.
'/api/v1/account/logout':                           { action: 'account/logout' },
'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
*/

};
