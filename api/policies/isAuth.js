var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  var bearerToken;
  var bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    bearerToken = bearer[1];
    if (bearer[0] !== 'Bearer') {
      //return res.forbidden("bearer not understood");
      return res.status(403).json({ 'code':403,'message': 'bearer not understood','data':null});
    }

    // We need to check token's ability
    jwt.verify(bearerToken, 'Your secret key is here', (err, decoded) => {
      if (err) {
        //sails.log("verification error", err);
        if (err.name === 'TokenExpiredError')
        //return res.forbidden("Session timed out, please login again");
        {return res.status(403).json({ 'code':403,'message': 'Session timed out, please login again','data':null});}
        else
        //return res.forbidden("Error authenticating, please login again");
        {return res.status(403).json({ 'code':403,'message': 'Error authenticating, please login again','data':null});}
      }

      User.findOne(decoded.id).exec(function callback(error, user) {
        if (error) {res.status(500).json({ 'code':500,'message': 'error','data':null});}//return res.serverError(err);
        if (!user) {res.status(500).json({ 'code':500,'message': 'User not found','data':null});}//return res.serverError("User not found");
        req.user = user;
        next();
      });
    });
  } else {
    return res.status(403).json({ 'code':403,'message': 'No token provided','data':null});
    //return res.forbidden("No token provided");
  }
};

